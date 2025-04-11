#ifndef APPCONNECTION_H
#define APPCONNECTION_H

#include <Arduino.h>
#include <BLEDevice.h>
#include <ArduinoJson.h>

#define APP_CONNECTION_SERVICE_UUID        "d6432797-0b76-45e4-a7b5-5158f10e773f"
#define APP_CONNECTION_CHARACTERISTIC_UUID "4adf6da4-5e38-4f3f-83c4-f963178fbbd5"

class AppConnection {
public:
    AppConnection();
    void begin();           // Initializes BLE and starts advertising
    void advertise();       // Starts advertising
    void stopAdvertising(); // Stops advertising
    bool isConnected();     // Returns true if a device is connected

    // Getters for stored settings
    int getIsLocal();
    int getVolume();

    // Update settings from BLE data (called from the characteristic callback)
    void updateSettings(const String &jsonData);

private:
    BLEServer* pServer;
    BLECharacteristic* pCharacteristic;

    // Stored settings variables (isLocal is now an int: 0 for not local, 1 for local)
    int isLocal;
    int volume;

    // Inner class: BLE Server callbacks (handles connect/disconnect events)
    class ServerCallbacks : public BLEServerCallbacks {
    public:
        ServerCallbacks(AppConnection *parent);
        void onConnect(BLEServer *pServer) override;
        void onDisconnect(BLEServer *pServer) override;
    private:
        AppConnection *parent;
    };

    // Inner class: Characteristic callbacks (handles writes from the BLE client)
    class CharacteristicCallbacks : public BLECharacteristicCallbacks {
    public:
        CharacteristicCallbacks(AppConnection *parent);
        void onWrite(BLECharacteristic *pCharacteristic) override;
    private:
        AppConnection *parent;
    };
};

#endif // APPCONNECTION_H