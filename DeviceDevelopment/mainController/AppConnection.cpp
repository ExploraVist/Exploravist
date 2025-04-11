#include "AppConnection.h"

// Constructor: initialize defaults
AppConnection::AppConnection() : pServer(nullptr), pCharacteristic(nullptr), isLocal(0), volume(0) {
}

// Begin initializes BLE, creates server, service, and characteristic,
// sets callbacks, and starts advertising.
void AppConnection::begin() {
    BLEDevice::init("ESP32-BLE-Device");
    pServer = BLEDevice::createServer();
    pServer->setCallbacks(new ServerCallbacks(this));

    BLEService* pService = pServer->createService(APP_CONNECTION_SERVICE_UUID);
    pCharacteristic = pService->createCharacteristic(
                          APP_CONNECTION_CHARACTERISTIC_UUID,
                          BLECharacteristic::PROPERTY_READ |
                          BLECharacteristic::PROPERTY_WRITE
                      );
    
    // Set an initial value; this can be updated when settings are received
    pCharacteristic->setValue("Hello from ESP32!");
    pCharacteristic->setCallbacks(new CharacteristicCallbacks(this));
    pService->start();

    advertise();
}

// Starts BLE advertising using the defined service UUID and parameters.
void AppConnection::advertise() {
    BLEAdvertising* pAdvertising = BLEDevice::getAdvertising();
    pAdvertising->addServiceUUID(APP_CONNECTION_SERVICE_UUID);
    pAdvertising->setScanResponse(true);
    pAdvertising->setMinPreferred(0x06); // Lower power consumption
    pAdvertising->setMinPreferred(0x12);
    BLEDevice::startAdvertising();
}

// Stops advertising.
void AppConnection::stopAdvertising() {
    BLEDevice::stopAdvertising();
}

// Returns true if any device is connected
bool AppConnection::isConnected() {
    if (pServer) {
        return pServer->getConnectedCount() > 0;
    }
    return false;
}

// Getters for settings
int AppConnection::getIsLocal() {
    return isLocal;
}

int AppConnection::getVolume() {
    return volume;
}

// Parses JSON data and updates stored settings.
// Expects a JSON string such as: {"is_local": 0, "volume": 29}
void AppConnection::updateSettings(const String &jsonData) {
    StaticJsonDocument<200> doc;
    DeserializationError error = deserializeJson(doc, jsonData);
    if (!error) {
        if (doc.containsKey("is_local")) {
            isLocal = doc["is_local"].as<int>();
        }
        if (doc.containsKey("volume")) {
            volume = doc["volume"].as<int>();
        }
        Serial.print("Updated settings: isLocal = ");
        Serial.print(isLocal);
        Serial.print(", volume = ");
        Serial.println(volume);
    } else {
        Serial.println("Failed to parse JSON in updateSettings.");
    }
}

// ---------------------- ServerCallbacks Implementation ----------------------

// Constructor: takes a pointer to the AppConnection instance.
AppConnection::ServerCallbacks::ServerCallbacks(AppConnection *parent) : parent(parent) {
}

// Called when a BLE client connects.
void AppConnection::ServerCallbacks::onConnect(BLEServer *pServer) {
    Serial.println("Device connected!");
}

// Called when a BLE client disconnects.
void AppConnection::ServerCallbacks::onDisconnect(BLEServer *pServer) {
    Serial.println("Device disconnected!");
    // Restart advertising so the device can be re-connected
    BLEDevice::startAdvertising();
}

// ---------------- CharacteristicCallbacks Implementation ------------------

// Constructor: stores a pointer to the AppConnection instance.
AppConnection::CharacteristicCallbacks::CharacteristicCallbacks(AppConnection *parent) : parent(parent) {
}

// Called when data is written to the BLE characteristic.
void AppConnection::CharacteristicCallbacks::onWrite(BLECharacteristic *pCharacteristic) {
    std::string rxValue = pCharacteristic->getValue();
    if (rxValue.length() > 0) {
        String jsonData = String(rxValue.c_str());
        Serial.print("Received BLE write: ");
        Serial.println(jsonData);
        // Update settings based on the received JSON
        parent->updateSettings(jsonData);
    }
}