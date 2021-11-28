import axios from "axios";

export default class API_PERSON {
    fetchPersonInSpace() {
        return axios
        .get("http://api.open-notify.org/astros.json", {crossdomain: true})
    }
}