import React from 'react';
import API_PICTURES from './API_PICTURES.js';

const apiPictures = new API_PICTURES();

export default class Planet extends React.Component {
    getData() {
        var choice = this.props.choice;
        apiPictures
            .fetchPlanetPicture(choice)
            .then(function (response) {
                var data = response.data;
                var src = data.collection.items[0].href;

                document.getElementsByClassName("planet-item")[choice].innerHTML = `<img src=${src} alt="planet" width="350px" height="350px"></img>`;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        this.getData();
        return (
            <div className="planet-item col-auto"></div>
        );
    }
}