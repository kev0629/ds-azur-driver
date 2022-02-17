import React from 'react';
import Image from 'next/image';
import Route from './Route';
import logo from '../public/Images/logo_white.png';
import Flags from 'country-flag-icons/react/3x2'

const Navbar = (props) => {
    function setUnderline(e) {
        e.target.style.textDecoration = 'underline';
    }
    function unsetUnderline(e) {
        e.target.style.textDecoration = 'none';
    }
    return (
        <div>
            <nav className="navbar">
                <div className='logo-section'>
                    <Route to='acceuil' link='/#acceuil' nav={false}>
                        <a><Image src={logo} width={894/9} height={383/9} className='logo' alt="logo" /></a>
                    </Route>
                </div>
                <div className='title'>
                    <p className='main-title'>DS AZUR DRIVER</p>
                    <p className='secondary-title'>by David Saffioti</p>
                </div>
                <div className='nav'>
                    <ul>
                        <li>
                            <Route to='acceuil' link='/#acceuil' nav={true}>
                                <a>Accueil</a>
                            </Route>
                        </li>
                        <li>
                            <Route to='prestation' link='/#prestation' nav={true}>
                                <a>Prestation</a>
                            </Route>
                                
                        </li>
                        <li>
                            <Route to='reservation' link='/#reservation' nav={true}>
                                <a>Réservation</a>
                            </Route>
                                
                        </li>
                        <li>
                            <Route to='contact' link='/#contact' nav={true}>
                                <a>Contact</a>
                            </Route>
                        </li>
                    </ul>
                </div>
                {/* <div className='flags'>
                    <div className="flag"style={props.language=='fr'?{opacity:1}:{opacity:0.5}}><Flags.FR title="Franais"/></div>
                    <div className="flag" style={props.language=='en'?{opacity:1}:{opacity:0.5}}><Flags.GB title="English"/></div>
                    <div className="flag" style={props.language=='it'?{opacity:1}:{opacity:0.5}}><Flags.IT title="Italiano"/></div>
                </div> */}
            </nav>
        </div>
    );
}

export default Navbar;
