import axios from "axios";

export default class API_LOCATIONS {
    fetchLocationsStarWars() {
        return axios
        .get("http://localhost:3000/locations", {crossdomain: true})
    }

    deleteLocationStarWars(name) {
        axios.delete(`http://localhost:3000/locations/${name}`, {crossdomain: true})
    }

    createLocationStarWars(location) {
        axios.post("http://localhost:3000/locations", location, {crossdomain: true})
    }
}