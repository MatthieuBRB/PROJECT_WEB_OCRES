import React from 'react';
import API_PERSON from './API_PERSON.js';

const apiPerson = new API_PERSON();

export default class Person extends React.Component {
    getData() {
        apiPerson
            .fetchPersonInSpace()
            .then(function (response) {
                var data = response.data;
                document.getElementsByClassName("person-number")[0].innerHTML = data.people.length;
                for (var i = 0; i < data.people.length; i++) {
                    document.getElementById("tooltip-button").title += `${data.people[i].name} / `;
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        this.getData();
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <span className="person-number col-auto"></span>
                    <div className="person-text col-2">
                        <span>personnes ont déjà déménagé dans l'espace</span>
                        <button id="tooltip-button" title="" disabled><span role="img" aria-label="fusée">ℹ️</span></button>
                    </div>
                </div>
            </div>
        );
    }
}