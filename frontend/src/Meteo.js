import React from 'react';
import API_NASA from './API_NASA.js';

const apiNasa = new API_NASA();

export default class Meteo extends React.Component {
    getData() {
        apiNasa
            .fetchGeomagnetic()
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
            .fetchShocks()
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
            .fetchSolarFlare()
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
                <div className="row justify-content-center">
                    <div className="accordion col-10" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    TEMPÊTES GÉOMAGNÉTIQUES
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                                <div className="accordion-body"></div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    CHOCS INTERPLANÉTAIRES
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                <div className="accordion-body"></div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
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
}