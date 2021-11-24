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
                    <span className="person-text col-2"> Personnes ont déjà déménagé dans l'espace</span>
                </div>
            </div>
        );
    }
}