import axios from 'axios'

const API_KEY = "JM3SVIfplZrnSqiVzxjDFTS5FkN5CSauImnYOY8w";

export default class API_NASA {
    fetchPictureOfTheDay() {
        return axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {crossdomain: true})
    }

    fetchGeomagnetic() {
        return axios
        .get(`https://api.nasa.gov/DONKI/GST?startDate=default&api_key=${API_KEY}`, {crossdomain: true})
    }

    fetchShocks() {
        return axios
        .get(`https://api.nasa.gov/DONKI/IPS?startDate=default&api_key=${API_KEY}`, {crossdomain: true})
    }

    fetchSolarFlare() {
        return axios
        .get(`https://api.nasa.gov/DONKI/FLR?startDate=default&api_key=${API_KEY}`, {crossdomain: true})
    }
}