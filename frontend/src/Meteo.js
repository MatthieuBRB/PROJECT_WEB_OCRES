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
                    document.getElementsByClassName("accordion-body")[0].innerHTML = "Aucune tempête n'est prévue dans les 30 prochains jours";
                } else {
                    var str = "";
                    for (var i = 0; i < data.length; i++) {
                        str = `${data[i].startTime}<br><br>Temps d'observation : `;
                        for (var j = 0; j < data[0].allKpIndex.length; j++) {
                            str += (data[i].allKpIndex[j].observedTime + " / ");
                        }
                        str += "<br>Index KP : ";
                        for (j = 0; j < data[0].allKpIndex.length; j++) {
                            str += (data[i].allKpIndex[j].kpIndex + " / ");
                        }
                        str += "<br> Source : ";
                        for (j = 0; j < data[0].allKpIndex.length; j++) {
                            str += (data[i].allKpIndex[j].source + " / ");
                        }
                    }
                    document.getElementsByClassName("accordion-body")[0].innerHTML = str;
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
                <h3 className="section-head row">La météo sur votre planète</h3>
                <div className="row justify-content-center">
                    <div className="accordion col-8" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Tempête géo-magnétique
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}