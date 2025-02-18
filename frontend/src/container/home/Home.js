import React from 'react';

import Banner from './Banner.js';

import rocket from '../../media/Rocket.png';
import rocket2 from '../../media/Rocket 2.png';

import POTD from './POTD.js';
import Weather from './Weather.js';
import Person from './Person.js';
import BuySection from './BuySection.js';
import SpaceX from './SpaceX.js';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <main>
                    <img className="rocket d-none d-xxl-block" src={rocket} alt="rocket" width="250px" height="171px"></img>
                    <img className="rocket2 d-none d-xxl-block" src={rocket2} alt="rocket2" width="370px" height="569px"></img>
                    <div className="gradient"></div>
                    <div className="gradient lower"></div>
                    <POTD />
                    <BuySection />
                    <Person />
                    <Weather />
                    <SpaceX />
                </main>
            </div>
        );
    }
}