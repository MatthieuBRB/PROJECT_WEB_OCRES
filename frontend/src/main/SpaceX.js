import React from "react";
import API_SPACEX from "./api/API_SPACEX";
import { CartesianGrid, BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from 'recharts';

const apispacex = new API_SPACEX();



export default class SpaceX extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSet: "",
        }
    }

    sentData(data) {
        return new Promise(
            resolve => {
                setTimeout(() => { resolve(data); }, 2000);
            }
        );
    }



    componentDidMount() {
        apispacex
            .fetchLaunches()
            .then(res => {
                var rawData = res.data;
                var dataSet = [];
                var dataSetYear = [];
                for (var i = 0; i < rawData.length; i++) {
                    var data = rawData[i].launch_year;
                    if (i >= 1) {
                        if ((rawData[i].launch_year !== rawData[i - 1].launch_year)) {
                            dataSetYear.push(data);
                        }
                    }
                    if (i === 0) {
                        dataSetYear.push(data);
                    }
                }
                for (var j = 0; j < dataSetYear.length; j++) {
                    var success = 0;
                    var fail = 0;
                    for (var t = 0; t < rawData.length; t++) {
                        if (dataSetYear[j] === rawData[t].launch_year) {
                            if (rawData[t].launch_success === true) {
                                success = success + 1;
                            }
                            else {
                                fail = fail + 1;
                            }
                        }
                    }
                    var dataFormat = {
                        launch_year: dataSetYear[j],
                        Lancement_réussi: success,
                        Lancement_échoué: fail,
                    }
                    dataSet.push(dataFormat);
                }
                this.setState({ dataSet: dataSet })
            })
            .catch(function (error) {
                console.error(error);
            });
    }

   

    render() {
        return (
            <div className="container">
                <h2 className="row justify-content-center">Graphique des lancements SpaceX</h2>
                <div>
                    <BarChart width={1300} height={300} data={this.state.dataSet} margin={{ top: 2, right: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="launch_year" />
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Bar dataKey="Lancement_réussi" type="monotone" fill="#2dfc03" />
                        <Bar dataKey="Lancement_échoué" type="monotone" fill=" #fc0303" />

                    </BarChart>
                </div>

            </div>
        )
    }
}
