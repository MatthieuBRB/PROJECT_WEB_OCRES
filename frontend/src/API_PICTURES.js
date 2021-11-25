import axios from "axios";

export default class API_PICTURES {
    fetchPlanetPicture(choice) {
        var id = "";
        if(choice === 1) {
            id = "PIA01492";
        }
        console.log(id);
        return axios
        .get(`https://images-api.nasa.gov/asset/${id}`, {crossdomain: true})
    }

    test() {
        console.log("test");
    }
}