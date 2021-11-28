import React from "react";
import API_SPACEX from "./API_SPACEX";
import { CartesianGrid, BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from 'recharts';

const apispacex = new API_SPACEX();



export default class SpaceX extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
        }
    }

    sentData(data) {
        return new Promise(
            resolve => {
                setTimeout(() => { resolve(data); }, 2000);
            }
        );
    }

    Graph() {
        apispacex
            .fetchLaunches()
            .then(function (response) {
                var data;
                console.log(data);
                this.setState({ data: response.data });

            })
            .catch(function (error) {
                console.error(error);
            });
    }


    render() {
        this.Graph();
        console.log(this.state.data);
        return (
            <div>TABLEAU DE MERDE
                <div className="test">
                    <BarChart width={1500} height={300} data={this.state.data} margin={{ top: 2, right: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="launch_year" />
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Bar dataKey="" fill=" #E31ED1" />
                    </BarChart>
                </div>

            </div>
        )
    }
}
