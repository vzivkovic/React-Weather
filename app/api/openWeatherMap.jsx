var axios = require('axios');

//a525079fbf464d263ac575634b311c26

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a525079fbf464d263ac575634b311c26&units=metric';

module.exports = {

    getTemp: function (location) {

        var encodedLocation = encodeURIComponent(location)      //for url

        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        // return axios.get(requestUrl)
        //     .then(function (response) {
        //         debugger;
        //         return res.data.main.temp;
        //     })
        //     .catch(function (error) {
        //         debugger;
        //         return error;
        //     });

        //axion uses promise
        return axios.get(requestUrl).then(function (res) {
            
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.me);
            } else {
                return res.data.main.temp;
            }

        }, function (res) {
            
            throw new Error(res.data.message);
        });
    }
}
