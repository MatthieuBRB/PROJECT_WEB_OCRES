import React from 'react';
import API_NASA from './API_NASA.js';

const apiNasa = new API_NASA();

export default class POTD extends React.Component {
    getData() {
        apiNasa
            .fetchPictureOfTheDay()
            .then(function (response) {
                var data = response.data;
                document.getElementsByClassName("potd-title")[0].innerHTML = data.title;
                document.getElementsByClassName("potd-description")[0].innerHTML = data.explanation;
                document.getElementById("potd-picture").src = data.url;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        this.getData();
        return (
            <div>
                <div className="potd-title"></div>
                <div className="potd-description"></div>
                <img id="potd-picture" src="" alt="potd"></img>
            </div>
        );
    }
}