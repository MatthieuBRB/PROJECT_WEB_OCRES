import React from 'react';
import API_PICTURES from './API_PICTURES.js';

const apiPictures = new API_PICTURES();
const idList = {
    "Mars": "PIA04591",
    "Venus": "PIA00271",
    "Io": "PIA00583",
    "Triton": "PIA01536",
    "Callisto": "PIA03456",
    "Neptune": "PIA01492"
};
const priceList = ["159,999,999,999.99$", "2,099,000,000,000.99$", "585,000,000,000.00$", "320,000,000,000.99$", "694,500,000,000.00$", "215,999,999,999.99$"];


export default class Planet extends React.Component {
    getData() {
        var choice = this.props.choice;
        apiPictures
            .fetchPlanetPicture(choice, idList)
            .then(function (response) {
                var data = response.data;
                var src = data.collection.items[0].href;

                document.getElementsByClassName("planet-picture")[choice].innerHTML = `<img src=${src} alt="planet" width="350px" height="350px"></img>`;

                var price = Math.floor(Math.random() * 6);
                document.getElementsByClassName("planet-price")[choice].innerHTML = priceList[price];
                document.getElementsByClassName("planet-name")[choice].innerHTML = Object.keys(idList)[choice];
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        this.getData();
        return (
            <div className="planet-item col-auto">
                <div className="planet-picture"></div>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between">
                        <div className="planet-name col-auto"></div>
                        <div className="planet-price col-auto"></div>
                    </div>
                </div>
            </div>
        );
    }
}