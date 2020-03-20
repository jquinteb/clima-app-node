const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e441d6690c8c0181754a2a3c05717263&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}