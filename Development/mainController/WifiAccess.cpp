// WifiAccess.cpp
#include "WifiAccess.h"

// TO-DO 
// Use WifiManager library for everything WIFI related.



String _ssid;
String _password;


// On the initialization of a WifiAccess object, we will need to have an ssid and password

// Should I be able to construct a WifiAccess object?? I don't know... TODO
WifiAccess::WifiAccess(const char* ssid, const char* password)
    : _ssid(ssid), _password(password) {}
    

void connect() {

    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial); 

    // wait for WiFi connection
    WiFi.begin(_ssid, _password);
    Serial.print("Connecting to ");
    Serial.println(_ssid);
    while (WiFi.status() != WL_CONNECTED) {  
        delay(1000);
        Serial.print(".");
    }
    Serial.println("connected");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}

bool isConnected() {
    if(WiFi.status() != WL_CONNECTED) {
        Serial.println("WiFi not connected.");
        return true;
    } else {
        Serial.println("WiFi connected!");
        return false;
    }
}




