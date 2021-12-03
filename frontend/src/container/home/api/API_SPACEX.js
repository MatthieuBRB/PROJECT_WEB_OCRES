import axios from 'axios';



export default class API_SPACEX{
    fetchLaunches(){
        return axios
        .get("https://api.spacexdata.com/v2/launches",{crossdomain: true});
    }
}