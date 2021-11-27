import React from 'react';

import POTD from './POTD.js';
import Weather from './Weather.js';
import Person from './Person.js';
import BuySection from './BuySection.js';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <img className="rocket" src="/media/Rocket.png" alt="rocket" width="250px" height="171px"></img>
                <img className="rocket2" src="/media/Rocket 2.png" alt="rocket2" width="370px" height="569px"></img>
                <div className="gradient"></div>
                <POTD />
                <BuySection />
                <Person />
                <Weather />
            </main>
        );
    }
}