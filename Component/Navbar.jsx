import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                    <Link href='/#acceuil'>
                        <a><Image src={logo} width={894/9} height={383/9} className='logo' alt="logo" /></a>
                    </Link>
                </div>
                <div className='title'>
                    <p className='main-title'>DS AZUR DRIVER</p>
                    <p className='secondary-title'>by David Saffioti</p>
                </div>
                <div className='nav'>
                    <ul>
                        <li onMouseOver={setUnderline}
                            onMouseLeave={unsetUnderline}>
                                <Link href='/#acceuil'>
                                    <a>Accueil</a>
                                </Link>
                        </li>
                        <li onMouseOver={setUnderline}
                            onMouseLeave={unsetUnderline}>
                                <Link href='/#prestation'>
                                    <a>Prestation</a>
                                </Link>
                                
                        </li>
                        <li onMouseOver={setUnderline}
                            onMouseLeave={unsetUnderline}>
                                <Link href='/#reservation'>
                                    <a>Réservation</a>
                                </Link>
                                
                        </li>
                        <li onMouseOver={setUnderline}
                            onMouseLeave={unsetUnderline}>
                                <Link href='/#contact'>
                                    <a>Contact</a>
                                </Link>
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
