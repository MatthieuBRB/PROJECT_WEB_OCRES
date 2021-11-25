import React from 'react';
import API_PICTURES from './API_PICTURES.js';

const apiPictures = new API_PICTURES();

export default class Planet extends React.Component {
    getData() {
        apiPictures
            .fetchPlanetPicture(1)
            .then(function (response) {
                var data = response.data;
                var src = data.collection.items[0].href;
                console.log("vroum");
                document.getElementById("planets-list").innerHTML = `<img src=${src} alt="planet" width="200px" height="200px"></img>`;
            })
            .catch(function (error) {
                console.error(error);
        });
    }
    
    render() {
        this.getData();
        return (
            <div id="planets-list"></div>
        );
    }
}