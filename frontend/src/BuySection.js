import React from 'react';
import Planet from './Planet.js';

export default class BuySection extends React.Component {
    render() {
        return (
            <div id="planets-list" className="container-fluid">
                <div className="row justify-content-around planet-row">
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
                <div className="row justify-content-around planet-row">
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