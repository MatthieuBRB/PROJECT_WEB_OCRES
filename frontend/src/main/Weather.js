import React from 'react';
import API_NASA from './api/API_NASA.js';

const apiNasa = new API_NASA();

export default class Meteo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: "default", date2: "default" };
    }

    getData() {
        var date = this.state.date;
        var date2 = this.state.date2;

        apiNasa
            .fetchGeomagnetic(date, date2)
            .then(function (response) {
                var data = response.data;
                if (data === '') {
                    document.getElementsByClassName("accordion-body")[0].innerHTML = "Aucune tempête n'est prévue";
                } else {
                    var str = "";
                    for (var i = 0; i < data.length; i++) {
                        str = `${data[i].startTime}<br><br><strong>Temps d'observation :</strong> `;
                        for (var j = 0; j < data[i].allKpIndex.length; j++) {
                            str += (data[i].allKpIndex[j].observedTime + " / ");
                        }
                        str += "<br><strong>Index KP :</strong> ";
                        for (j = 0; j < data[i].allKpIndex.length; j++) {
                            str += (data[i].allKpIndex[j].kpIndex + " / ");
                        }
                        str += "<br><strong>Source :</strong> ";
                        for (j = 0; j < data[i].allKpIndex.length; j++) {
                            str += (data[i].allKpIndex[j].source + " / ");
                        }
                    }
                    document.getElementsByClassName("accordion-body")[0].innerHTML = str;
                }
            })
            .catch(function (error) {
                console.error(error);
            });

        apiNasa
            .fetchShocks(date, date2)
            .then(function (response) {
                var data = response.data;
                if (data === '') {
                    document.getElementsByClassName("accordion-body")[1].innerHTML = "Aucun choc n'est prévu";
                } else {
                    var str = "";
                    for (var i = 0; i < data.length; i++) {
                        str += `${data[i].location}<br><br><strong>Heure de l'évènement :</strong> `;
                        str += `${data[i].eventTime}<br><strong>Type(s) :</strong> `;
                        for (var j = 0; j < data[i].instruments.length; j++) {
                            str += (data[i].instruments[j].displayName + " / ");
                        }
                        str += "<hr class='accordion-line'>";
                    }
                    document.getElementsByClassName("accordion-body")[1].innerHTML = str;
                }
            })
            .catch(function (error) {
                console.error(error);
            });

        apiNasa
            .fetchSolarFlare(date, date2)
            .then(function (response) {
                var data = response.data;
                if (data === '') {
                    document.getElementsByClassName("accordion-body")[2].innerHTML = "Aucune éruption solaire n'est prévue";
                } else {
                    var str = "";
                    for (var i = 0; i < data.length; i++) {
                        str += `<strong>Apogée de l'intensité :</strong> `;
                        str += `${data[i].peakTime}<br><strong>Catégorie :</strong> `;
                        str += `${data[i].classType}<br><strong>Localisation de la source de l'éruption :</strong> `;
                        str += `${data[i].sourceLocation}<br><strong>N° de la région active :</strong> `;
                        str += `${data[i].activeRegionNum}<br><strong>Type(s) :</strong> `;
                        for (var j = 0; j < data[i].instruments.length; j++) {
                            str += (data[i].instruments[j].displayName + " / ");
                        }
                        str += "<hr class='accordion-line'>";
                    }
                    document.getElementsByClassName("accordion-body")[2].innerHTML = str;
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
                <h3 className="section-head row">La météo dans votre système</h3>
                <div className="row weather-research">
                    <label className="col-auto" htmlFor="weatherDate">Rechercher la météo entre</label>
                    <input type="date" className="weather-research-date col-auto" name="weatherDate" required></input>
                    <label className="col-auto" htmlFor="weatherDate">et</label>
                    <input type="date" className="weather-research-date col-auto" name="weatherDate" required></input>
                    <button className="weather-research-button" onClick={() => this.changeDate()}>Rechercher</button>
                </div>
                <div className="row section-body">
                    <div className="accordion col-8" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    TEMPÊTES GÉOMAGNÉTIQUES
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                                <div className="accordion-body"></div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    CHOCS INTERPLANÉTAIRES
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                <div className="accordion-body"></div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ÉRUPTIONS SOLAIRES
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeDate() {
        var value = document.getElementsByClassName("weather-research-date")[0].value;
        this.setState({ date: value });
        var value2 = document.getElementsByClassName("weather-research-date")[1].value;
        this.setState({ date2: value2 });
        this.getData();
    }
}