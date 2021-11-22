import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="container-fluid p-0">
                <div className="row align-items-center g-custom">
                    <img className="logo col-auto" src="/media/Logo.png" alt="logo" width="48px" height="48px"></img>
                    <h1 className="header-name col-auto">ExoProperty</h1>
                </div>
                <div className="row align-items-center text-center g-custom">
                    <video className="header-video col-12" loop autoPlay muted width="100%" height="400px">
                        <source src="/media/Tunnel.mp4" type="video/mp4"></source>
                    </video>
                    <h2 className="header-text col-12">
                        VOTRE MAISON DANS LES ÉTOILES &nbsp;
                        <span role="img" aria-label="fusée">&#128640;</span>
                        <hr className="line" height="10px"></hr>
                    </h2>
                </div>
            </header>
        );
    }
}