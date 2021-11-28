import axios from 'axios'

const API_KEY = "JM3SVIfplZrnSqiVzxjDFTS5FkN5CSauImnYOY8w";

export default class API_NASA {
    fetchPictureOfTheDay() {
        return axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {crossdomain: true})
    }

    fetchGeomagnetic(date, date2) {
        return axios
        .get(`https://api.nasa.gov/DONKI/GST?startDate=${date}&endDate=${date2}&api_key=${API_KEY}`, {crossdomain: true})
    }

    fetchShocks(date, date2) {
        return axios
        .get(`https://api.nasa.gov/DONKI/IPS?startDate=${date}&endDate=${date2}&api_key=${API_KEY}`, {crossdomain: true})
    }

    fetchSolarFlare(date, date2) {
        return axios
        .get(`https://api.nasa.gov/DONKI/FLR?startDate=${date}&endDate=${date2}&api_key=${API_KEY}`, {crossdomain: true})
    }
}