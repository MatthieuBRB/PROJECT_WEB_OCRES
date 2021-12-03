import React from 'react';
import API_NASA from './api/API_NASA.js';

const apiNasa = new API_NASA();

export default class POTD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            explanation: "",
            date: "",
            url: ""
        };
    }

    componentDidMount() {
        apiNasa
            .fetchPictureOfTheDay()
            .then(res => {
                const data = res.data;
                this.setState({ title: data.title });
                this.setState({ explanation: data.explanation });
                this.setState({ date: data.date });
                this.setState({ url: data.url });
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <h3 className="section-head-first row g-custom">Image du jour</h3>
                <div className="row g-custom justify-content-center">
                    <img className="col-4" id="potd-picture" src={this.state.url} alt="potd" height="600px"></img>
                    <div className="col-7 potd-text">
                        <div className="potd-title">{this.state.title}</div>
                        <div className="potd-description">{this.state.explanation}</div>
                        <div className="potd-date">{this.state.date}</div>
                    </div>
                </div>
            </div>
        );
    }
}