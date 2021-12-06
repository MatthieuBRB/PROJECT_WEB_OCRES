import React from 'react';
import API_PICTURES from './api/API_PICTURES.js';

const apiPictures = new API_PICTURES();
const idList = {
    "Mars": "PIA04591",
    "Venus": "PIA00271",
    "Io": "PIA00583",
    "Triton": "PIA01536",
    "Callisto": "PIA03456",
    "Neptune": "PIA01492"
};
const priceList = ["159,999,999,999.99$", "2,099,000,000,000.99$", "585,000,000,000.00$", "320,000,000,000.99$", "694,500,000,000.00$", "215,999,999,999.99$"];


export default class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            price: ""
        };
    }

    componentDidMount() {
        apiPictures
            .fetchPlanetPicture(this.props.choice, idList)
            .then(res => {
                const data = res.data;
                this.setState({ url: data.collection.items[0].href });

                var price = Math.floor(Math.random() * 6);
                this.setState({ price: priceList[price] });
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="planet-item col-auto">
                <div className="planet-picture">
                    <img src={this.state.url} alt="planet"></img>
                </div>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between">
                        <div className="planet-name col-auto">{Object.keys(idList)[this.props.choice]}</div>
                        <div className="planet-price col-auto">{this.state.price}</div>
                    </div>
                </div>
            </div>
        );
    }
}