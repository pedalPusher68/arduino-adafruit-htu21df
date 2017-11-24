let Adafruit_HTU21DF = {

    _create: ffi('void *mgos_htu21df_create()'),
    _begin: ffi('int mgos_htu21df_begin(void *)'),
    _rdTp: ffi('double mgos_htu21df_readTemperature(void *)'),
    _rdHm: ffi('double mgos_htu21df_readHumidity(void *)'),
    _rst: ffi('void mgos_htu21df_reset(void *)'),

    _proto: {

        // functions
        begin: function () {
            return Adafruit_HTU21DF._begin(this.tsl);
        },

        readTemperature: function () {
            return Adafruit_HTU21DF._rdTp(this.tsl);
        },

        readHumidity: function () {
            return Adafruit_HTU21DF._rdHm(this.tsl);
        },

        reset: function () {
            Adafruit_HTU21DF._rst(this.tsl);
        }

    },

    create: function () {
        let obj = Object.create(Adafruit_HTU21DF._proto);
        // set default parameter values
        // Initialize Adafruit_HTU21DF library.
        // Return value: handle opaque pointer.
        obj.tsl = Adafruit_HTU21DF._create();
        return obj;
    }

};
