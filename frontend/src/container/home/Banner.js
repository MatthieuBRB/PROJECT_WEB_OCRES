import React from 'react';
import loop from '../../media/Tunnel.mp4';

export default class Banner extends React.Component {
    render() {
        return (
            <div className="banner container-fluid p-0">
                <div className="row align-items-center text-center g-custom">
                    <video className="banner-video col-12" loop autoPlay muted width="100%" height="400px">
                        <source src={loop} type="video/mp4"></source>
                    </video>
                    <h2 className="banner-text col-12">
                        VOTRE MAISON DANS LES ÉTOILES &nbsp;
                        <span role="img" aria-label="fusée">&#128640;</span>
                        <hr className="line" height="10px"></hr>
                    </h2>
                </div>
            </div>
        );
    }
}