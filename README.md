
# Arduino Adafruit HTU21D(D) library for Mongoose OS

This is a port of the [Adafruit Arduino driver for the HTU21D(F) sensor](https://github.com/adafruit/Adafruit_HTU21DF_Library) ported to run on the [Mongoose OS ecosystem](https://mongoose-os.com/docs/reference/api.html).

Usage is extremely simple....

in mos.yml, add to **libs:** section,

`  - origin: https://github.com/pedalPusher68/arduino-adafruit-htu21df`
  
in your **init.js**, add something like the following,

`load('api_arduino_htu21df.js');`

and

`// Initialize Adafruit_HTU21DF library
let htu = Adafruit_HTU21DF.create();
htu.begin();
let htuGetData = function () {
    print('HTU21D:  T: ', htu.readTemperature() ,'C     RH: ', htu.readHumidity(), '%');
};
let htuTimer = Timer.set(10000 /* milliseconds */, true /* repeat */, htuGetData, null);
`

to use the library.

Enjoy!
