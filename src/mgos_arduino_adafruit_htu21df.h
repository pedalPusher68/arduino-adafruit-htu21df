//
// Created by Bradley Smith on 11/23/17.
//

#ifndef ARDUINO_ADAFRUIT_HTUD1DF_MGOS_ARDUINO_ADAFRUIT_HTU21D_C_H
#define ARDUINO_ADAFRUIT_HTUD1DF_MGOS_ARDUINO_ADAFRUIT_HTU21D_C_H

#include "Adafruit_HTU21DF.h"

#ifdef __cplusplus
extern "C" {
#endif


Adafruit_HTU21DF *mgos_htu21df_create();

int mgos_htu21df_begin(Adafruit_HTU21DF *htu);

double mgos_htu21df_readTemperature(Adafruit_HTU21DF *htu);

double mgos_htu21df_readHumidity(Adafruit_HTU21DF *htu);

void mgos_htu21df_reset(Adafruit_HTU21DF *htu);


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



#ifdef __cplusplus
}
#endif

#endif //ARDUINO_ADAFRUIT_HTUD1DF_MGOS_ARDUINO_ADAFRUIT_HTU21D_C_H
