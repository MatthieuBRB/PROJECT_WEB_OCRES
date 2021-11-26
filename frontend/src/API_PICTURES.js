import axios from "axios";

const idList = ["PIA01492", "PIA03456", "PIA00583", "PIA01536", "PIA04591", "PIA00271"];

export default class API_PICTURES {
    fetchPlanetPicture(choice) {
        var id;
        switch (choice) {
            case 0:
                id = idList[0];
                break;
            case 1:
                id = idList[1];
                break;
            case 2:
                id = idList[2];
                break;
            case 3:
                id = idList[3];
                break;
            case 4:
                id = idList[4];
                break;
            case 5:
                id = idList[5];
                break;
            default:
                id = idList[0];
                break;
        }

        return axios
            .get(`https://images-api.nasa.gov/asset/${id}`, { crossdomain: true })
    }
}