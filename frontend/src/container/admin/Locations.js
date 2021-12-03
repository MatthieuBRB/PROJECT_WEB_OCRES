import React from "react";
import API_LOCATIONS from "./API_LOCATIONS";

const apiLocations = new API_LOCATIONS();

export default class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableContent: ""
        };
    }

    componentDidMount() {
        apiLocations
            .fetchLocationsStarWars()
            .then(res => {
                const data = res.data;
                var temp = "<table>";
                temp += "<tr><td>Nom</td><td>Film</td><td>Pays</td><td>Type</td><td>Équivalent dans la fiction</td></tr>";
                for (var i = 0; i < data.length; i++) {
                    temp += "<tr><td>";
                    temp += data[i].name + "</td><td>";
                    temp += data[i].movie + "</td><td>";
                    temp += data[i].country + "</td><td>";
                    temp += data[i].type + "</td><td>";
                    temp += data[i].fiction;
                    temp += "</td></tr>";
                }
                temp += "</table>";
                this.setState({ tableContent: temp });
            })
    }
    
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.tableContent }}></div>
        );
    }
}