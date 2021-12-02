import axios from "axios";

export default class API_LOCATIONS {
    fetchLocationsStarWars() {
        return axios
        .get("http://localhost:3000/locations", {crossdomain: true})
    }
}