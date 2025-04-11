#include "WifiAccess.h"
#include "AIInterface.h"
#include "sd_read_write.h"
#include "Camera.h"
#include "config.h"
#include "Esp32.h"
#include "AppConnection.h"  // Added for BLE AppConnection functionality

#include "soc/soc.h"          // Disable brownout problems
#include "soc/rtc_cntl_reg.h" // Disable brownout problems

#include <Audio.h>

// Speaker GPIO Pins
#define I2S_LRC 45  // LR Clock (LRC)
#define I2S_BCLK 47 // Bit Clock (BCLK)
#define I2S_DOUT 21 // Data Out (DIN)
// SD Card GPIO Pins
#define SD_MMC_CMD 38 // Please do not modify it.
#define SD_MMC_CLK 39 // Please do not modify it.
#define SD_MMC_D0 40  // Please do not modify it.

// This is a macro, defined in pre-processing
// All included files have access to this macro
// #define CAMERA_MODEL_ESP32S3_EYE // Has PSRAM
#define FORMAT_SPIFFS_IF_FAILED
#define I2S_PORT I2S_NUM_0

const String ai_prompt = "Please provide a description of this image suitable for a blind or visually impaired individual. Try to remain as concise as possible and outline any larger key features by listing out objects seen. If you see any text please try to read out the text first before saying anything.  do not mention the quality of the image, and do not make a followup remark about how you have completed your task. When you are done make it concise and don't say anything more.";


WifiAccess wifiAccess(ssid, password); // Initialize WifiAccess object named "wifi"
AIInterface aiInterface(gpt_key, anthropic_key);
Esp32 device;
Camera camera;
AppConnection appConnection;  // Added BLE AppConnection instance

int menuIndex = 0;
String menuOptions[] = {"shortDescription.wav", "LongDescription.wav", "Volume.wav", "BatteryLevel.wav", "Settings.wav"};

int subMenuIndex = 0;
int model_selection = 0;
String subMenuOptions[] = {"AnthropicVision.wav", "GPTVision.wav"};

unsigned long timer = 3000;
unsigned long lastTime = millis();
unsigned long newTime = millis();

void settingsMenu() {    
    device.playWAVFile(subMenuOptions[subMenuIndex]);
    Serial.println(subMenuIndex);
    while (newTime - lastTime < timer)
    {
        
        // Serial.println(newTime - lastTime);
        newTime = millis();
        if (touchRead(T14) > 45000) // Select button
        {
            device.playWAVFile("popClick.wav");
            Serial.println("click");
            aiInterface.model_select = subMenuIndex;

            // Initialize HTTP connection  // Note: As of now whenever you enter this menu the HTTP connection is re-established. behavior unknown
            if (subMenuIndex == 0) {
                aiInterface.beginANTHROPIC();  
            }
            else {
                aiInterface.beginGPT();
            }
        }
        if (touchRead(T3) > 45000) // Scroll button
        {
            subMenuIndex++;
            if (subMenuIndex > 1)
            {
                subMenuIndex = 0;
            }

            device.playWAVFile(subMenuOptions[subMenuIndex]);
            Serial.println(subMenuIndex);
            delay(5);

            newTime = millis();
            lastTime = millis();
        }
        delay(10); // 10 ms delay
    }
}


void aiCall(int model_selection) {
    wifiAccess.isConnected();
    String image_base64 = camera.capture_base64();

    if (image_base64.length() == 0) {
        Serial.println("Failed to capture or encode photo.");
        return;  // Return early on failure
    }

    String ai_response = "";
    
    if (model_selection == 0) {
        aiInterface.model_select = 0;
        ai_response = aiInterface.anthropicImgResponse(ai_prompt, image_base64);
    } else {
        aiInterface.model_select = 1;
        ai_response = aiInterface.gptImgResponse(ai_prompt, image_base64);
    }

    if (ai_response.length() == 0) {
        Serial.println("Failed to get AI response");
        return;  // Return early on failure
    }

    Serial.println(ai_response);
    
    // Add timeout for TTS operation
    unsigned long ttsStartTime = millis();
    const unsigned long TTS_TIMEOUT = 30000;  // 30 second timeout
    
    // Simply call GoogleTTS without trying to capture a return value
    device.GoogleTTS(ai_response, "en");
    
    // Check if the operation took too long
    if (millis() - ttsStartTime > TTS_TIMEOUT) {
        Serial.println("TTS operation timed out");
    }
    
    // Reset menu state
    menuIndex = 0;
    lastTime = millis();  // Reset the menu timer
    newTime = millis();   // Reset the menu timer
}

void volumeMenu() {
    delay(200);
    unsigned long timer = 3000;
    unsigned long startTime = millis();
    unsigned long newTime = millis();
    while (newTime-startTime < timer) {
        if (touchRead(T14) > 45000)
        {
            device.increaseVolume();
            device.playWAVFile("popClickHighPitch.wav");
            Serial.println("Click_High_Pitch");
            delay(300);
            newTime = millis();
            lastTime = millis(); 
        }

        if (touchRead(T3) > 45000) 
        {
            device.decreaseVolume();
            device.playWAVFile("popClickLowPitch.wav");
            Serial.println("Click_High_Pitch");
            delay(300);
            newTime = millis();
            lastTime = millis();
        }
    }
}

// Initialization of the device
void setup()
{
    // Serial port for debugging purposes
    Serial.begin(115200);
    wifiAccess.connect();
    Serial.println("Connected");
    camera.initializeCamera();
    Serial.println("Camera Initialized");

    // SD Card Initialization
    SD_MMC.setPins(SD_MMC_CLK, SD_MMC_CMD, SD_MMC_D0);
    if (!SD_MMC.begin("/sdcard", true, true, SDMMC_FREQ_DEFAULT, 5))
    {
        Serial.println("Card Mount Failed");
        return;
    }
    uint8_t cardType = SD_MMC.cardType();
    if (cardType == CARD_NONE)
    {
        Serial.println("No SD_MMC card attached");
        return;
    }
    Serial.println("SD Card Initialized");

    // Initialize BLE AppConnection (starts advertising and BLE server)
    appConnection.begin();

    // audio.setPinout(I2S_BCLK, I2S_LRC, I2S_DOUT);
    // audio.setVolume(15);

    // Turn-off the 'brownout detector'
    // WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); // Might help overcome early shutoff due to power fluctuations
    // Serial.println("Bownout detector disabled");
    // Initialize AI Model HTTP Connection
    aiInterface.model_select = 0;
    aiInterface.beginANTHROPIC();
}


void loop()
{
    // Reset timers if they get too far apart
    if ((newTime - lastTime) > timer * 2) {
        lastTime = millis();
        newTime = millis();
    }
    
    if (touchRead(T3) > 35000) {
        device.playWAVFile("popClick.wav");
        
        // Add timeout for switch case operations
        unsigned long operationStart = millis();
        const unsigned long OPERATION_TIMEOUT = 60000;  // 1 minute timeout
        
        switch (menuIndex) {
            case 0: // Short Description
                {
                    aiInterface.setMaxToken(75);
                    aiCall(model_selection);
                    if (millis() - operationStart > OPERATION_TIMEOUT) {
                        Serial.println("Operation timed out");
                        menuIndex = 0;  // Reset to main menu
                    }
                    break;
                }
                
            case 1: // Long Description
                {
                    aiInterface.setMaxToken(150);
                    aiCall(model_selection);
                    break;                    
                }
            case 2: // Volume Settings
                {
                    volumeMenu();
                    break;
                }
            case 3: // Battery Level
                {
                    int percentage = device.readPercentage();
                    Serial.print("Battery Percentage: ");
                    // Serial.println(percentage);
                    device.playBatterySound(percentage);
                    menuIndex = 0;
                    break;
                }
            case 4: // Settings Menu
                {
                    settingsMenu();
                    break;
                }
        }
    }
    
    // Optional: Debug - Check BLE connection status and print if connected
    if (appConnection.isConnected()) {
        Serial.println("BLE device connected");
    }
}