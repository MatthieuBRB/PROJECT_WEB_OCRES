import React from "react";
import API_LOCATIONS from "./API_LOCATIONS";

const apiLocations = new API_LOCATIONS();

export default class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    componentDidMount() {
        apiLocations
            .fetchLocationsStarWars()
            .then(res => {
                const data = res.data;
                this.setState({ name: data[0].name });
            })
    }
    
    render() {
        return (
            <div className="locations">{this.state.name}</div>
        );
    }
}