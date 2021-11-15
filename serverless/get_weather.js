// import fetch from 'node-fetch';
const fetch = require('node-fetch');

const { API_KEY } = process.env;

exports.handler = async (event, context) => {
    const params = JSON.parse(event.body);
    const { lat, lon } = params;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (err) {
        return { statusCode: 422, body: err.stack }
    }
}