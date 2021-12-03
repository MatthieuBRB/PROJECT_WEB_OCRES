import React from 'react';
import API_PERSON from './api/API_PERSON';

const apiPerson = new API_PERSON();

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            names: ""
        };
    }

    componentDidMount() {
        apiPerson
            .fetchPersonInSpace()
            .then(res => {
                const data = res.data;
                this.setState({ number: data.people.length });

                var str = "";
                for (var i = 0; i < data.people.length; i++) {
                    str += `${data.people[i].name} / `;
                }
                this.setState({ names: str });
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <span className="person-number col-auto">{this.state.number}</span>
                    <div className="person-text col-2">
                        <span>personnes ont déjà déménagé dans l'espace</span>
                        <button id="tooltip-button" title={this.state.names} disabled><span role="img" aria-label="fusée">ℹ️</span></button>
                    </div>
                </div>
            </div>
        );
    }
}