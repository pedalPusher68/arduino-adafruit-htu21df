let Adafruit_HTU21DF = {

    _create: ffi('void *mgos_htu21df_create()'),
    _begin: ffi('int mgos_htu21df_begin(void *)'),
    _rdTp: ffi('double mgos_htu21df_readTemperature(void *)'),
    _rdHm: ffi('double mgos_htu21df_readHumidity(void *)'),
    _rst: ffi('void mgos_htu21df_reset(void *)'),

    _proto: {

        // Public functions

        // ## **`myHTU.begin()`**
        // Initialize sensor and make it ready for use.
        // Return value: 1 if sensor is ready, 0 otherwise.
        begin: function () {
            return Adafruit_HTU21DF._begin(this.htu);
        },

        // ## **`myHTU.readTemperature()`**
        // Read the current temperature.
        // Return value: current temperature value in Celsius as a double.
        readTemperature: function () {
            return Adafruit_HTU21DF._rdTp(this.htu);
        },

        // ## **`myHTU.readHumidity()`**
        // Read the current relative humidity as a percentage.
        // Return value: current humidity value as a double.
        readHumidity: function () {
            return Adafruit_HTU21DF._rdHm(this.htu);
        },

        // ## **`myHTU.reset()`**
        // Reset the sensor - sends the sensor-specific command to reset.
        // Return value: none
        reset: function () {
            Adafruit_HTU21DF._rst(this.htu);
        }

    },

    // ## **`Adafruit_HTU21DF.create()`**
    // Create an Adafruit_HTU21DF instance on I2C bus (address = 0x40).
    // Return value: an object with the methods defined in _proto: {...} (above).
    create: function () {
        let obj = Object.create(Adafruit_HTU21DF._proto);
        // set default parameter values
        // Initialize Adafruit_HTU21DF library.
        // Return value: handle opaque pointer.
        obj.htu = Adafruit_HTU21DF._create();
        return obj;
    }

};
