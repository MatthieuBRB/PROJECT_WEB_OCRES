import React from 'react';
import Planet from './Planet.js';

export default class BuySection extends React.Component {
    render() {
        return (
            <div id="planets-list" className="container-fluid">
                <h3 className="section-head row">Achetez votre terrain (500 km²)</h3>
                <div className="row justify-content-center planet-row">
                    <Planet
                        choice={0}
                    />
                    <Planet
                        choice={1}
                    />
                    <Planet
                        choice={2}
                    />
                </div>
                <div className="row justify-content-center planet-row">
                    <Planet
                        choice={3}
                    />
                    <Planet
                        choice={4}
                    />
                    <Planet
                        choice={5}
                    />
                </div>
            </div>
        );
    }
}