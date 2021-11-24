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
                document.getElementsByClassName("potd-date")[0].innerHTML = "- " + data.date;
                document.getElementById("potd-picture").src = data.url;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        this.getData();
        return (
            <div className="container-fluid p-0">
                <h3 className="section-head row g-custom">Image du jour</h3>
                <div className="row g-custom justify-content-center">
                    <img className="col-4" id="potd-picture" src="" alt="potd" height="600px"></img>
                    <div className="col-7 potd-text">
                        <div className="potd-title"></div>
                        <div className="potd-description"></div>
                        <div className="potd-date"></div>
                    </div>
                </div>
            </div>
        );
    }
}