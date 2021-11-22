import axios from 'axios'

const API_KEY = "JM3SVIfplZrnSqiVzxjDFTS5FkN5CSauImnYOY8w";

export default class API_NASA {

    fetchPictureOfTheDay() {
        return axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {crossdomain: true})
    }
}