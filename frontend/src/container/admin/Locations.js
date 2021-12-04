import React from "react";
import API_LOCATIONS from "./API_LOCATIONS";

const apiLocations = new API_LOCATIONS();

export default class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableContent: "",
            deleteValue: "",
            nameValue: "", movieValue: "", countryValue: "", typeValue: "", fictionValue: "",
            successValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        apiLocations
            .fetchLocationsStarWars()
            .then(res => {
                const data = res.data;
                var temp = "<table class='content-table'>";
                temp += "<thead><tr><td>Nom</td><td>Film</td><td>Pays</td><td>Type</td><td>Équivalent fictif</td></tr></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    temp += "<tr><td>";
                    temp += data[i].name + "</td><td>";
                    temp += data[i].movie + "</td><td>";
                    temp += data[i].country + "</td><td>";
                    temp += data[i].type + "</td><td>";
                    temp += data[i].fiction;
                    temp += "</td></tr>";
                }
                temp += "</tbody></table>";
                this.setState({ tableContent: temp });
            })
    }

    callDelete() {
        var name = this.state.deleteValue;
        if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${name} ?`)) {
            apiLocations.deleteLocationStarWars(name);
            window.location.reload(false);
        }
    }

    callCreate() {
        const location = {
            name: this.state.nameValue,
            movie: this.state.movieValue,
            country: this.state.countryValue,
            type: this.state.typeValue,
            fiction: this.state.fictionValue
        };
        apiLocations
            .createLocationStarWars(location)
            .then(res => {
                const data = res.data;
                if (data !== '') {
                    this.setState({ successValue: "Réussi" })
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 2000);
                } else {
                    alert("Échec lors de l'insertion");
                }
            })

    }

    handleChange(choice, event) {
        switch (choice) {
            case 'delete':
                this.setState({ deleteValue: event.target.value });
                break;
            case 'nom':
                this.setState({ nameValue: event.target.value });
                break;
            case 'film':
                this.setState({ movieValue: event.target.value });
                break;
            case 'pays':
                this.setState({ countryValue: event.target.value });
                break;
            case 'type':
                this.setState({ typeValue: event.target.value });
                break;
            case 'fiction':
                this.setState({ fictionValue: event.target.value });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div dangerouslySetInnerHTML={{ __html: this.state.tableContent }} className="row justify-content-center"></div>
                <div className="row input-section">
                    <input type="text" className="col-2" value={this.state.deleteValue} placeholder="Nom du lieu à supprimer" required onChange={(e) => this.handleChange("delete", e)} />
                    <button type="button" className="col-auto" onClick={() => this.callDelete()}>Supprimer</button>
                </div>
                <div className="row input-section">
                    <input type="text" className="col-2" value={this.state.nameValue} placeholder="Nom" required onChange={(e) => this.handleChange("nom", e)} />
                    <input type="text" className="col-2" value={this.state.movieValue} placeholder="Film" required onChange={(e) => this.handleChange("film", e)} />
                    <input type="text" className="col-2" value={this.state.countryValue} placeholder="Pays" required onChange={(e) => this.handleChange("pays", e)} />
                    <input type="text" className="col-2" value={this.state.typeValue} placeholder="Type" required onChange={(e) => this.handleChange("type", e)} />
                    <input type="text" className="col-2" value={this.state.fictionValue} placeholder="Équivalent fictif" required onChange={(e) => this.handleChange("fiction", e)} />
                    <button type="button" className="col-auto" onClick={() => this.callCreate()}>Ajouter</button>
                </div>
                <div className="row justify-content-end success">{this.state.successValue}</div>
            </div>
        );
    }
}