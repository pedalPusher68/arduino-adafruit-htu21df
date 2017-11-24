//
// Created by Bradley Smith on 11/23/17.
//
#include "mgos_arduino_adafruit_htu21df.h"

Adafruit_HTU21DF *mgos_htu21df_create() {
    return new Adafruit_HTU21DF();
}

int mgos_htu21df_begin(Adafruit_HTU21DF *htu) {
    if (htu == nullptr) return 0;
    boolean r = htu->begin();
    return (r) ? 1 : 0;
}

double mgos_htu21df_readTemperature(Adafruit_HTU21DF *htu) {
    double r = -999;
    if (htu != nullptr) {
        r = (double) htu->readTemperature();
    }
    return r;
}

double mgos_htu21df_readHumidity(Adafruit_HTU21DF *htu) {
    double r = -999;
    if (htu != nullptr) {
        r = (double) htu->readHumidity();
    }
    return r;

}

void mgos_htu21df_reset(Adafruit_HTU21DF *htu) {
    if (htu != nullptr) {
        htu->reset();
    }
}


//class Adafruit_HTU21DF {
//public:
//    Adafruit_HTU21DF();
//    boolean begin(void);
//    float readTemperature(void);
//    float readHumidity(void);
//    void reset(void);
//private:
//    boolean readData(void);
//    float humidity, temp;
//};
