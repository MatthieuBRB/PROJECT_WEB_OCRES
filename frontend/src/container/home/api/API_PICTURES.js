import axios from "axios";

export default class API_PICTURES {
    fetchPlanetPicture(choice, idList) {
        var id;
        switch (choice) {
            case 0:
                id = Object.values(idList)[0];
                break;
            case 1:
                id = Object.values(idList)[1];
                break;
            case 2:
                id = Object.values(idList)[2];
                break;
            case 3:
                id = Object.values(idList)[3];
                break;
            case 4:
                id = Object.values(idList)[4];
                break;
            case 5:
                id = Object.values(idList)[5];
                break;
            default:
                id = Object.values(idList)[6];
                break;
        }

        return axios
            .get(`https://images-api.nasa.gov/asset/${id}`, { crossdomain: true })
    }
}