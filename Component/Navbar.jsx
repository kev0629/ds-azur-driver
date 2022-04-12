import React, {useState} from 'react';
import Image from 'next/image';
import Route from './Route';
import { motion } from "framer-motion"
import {IoMdMenu,IoMdClose} from 'react-icons/io';
import logo from '../public/Images/logo_white.png';
import Flags from 'country-flag-icons/react/3x2'
import useDimension from '../Hooks/useDimension';

const Navbar = (props) => {

    const browserWidth = useDimension();
    
    const [handelBurger, setHandelBurger] = useState(false);

    const nav_actions = {
        visible:{display:'block', y:0},
        hidden:{display:'none',y:'-100%'}
    }

    

    return (
        <>
            <nav className="navbar">
                <div className='logo-section'>
                    <Route to='acceuil' link='/#acceuil' nav={false}>
                        <Image src={logo} width={894/9} height={383/9} className='logo' alt="logo"  />
                    </Route>
                </div>
                <div className='title'>
                    <p className='main-title'>DS AZUR DRIVER</p>
                    <p className='secondary-title'>by David Saffioti</p>
                </div>
                <div className='nav-burger'>
                    {browserWidth<960 && handelBurger?
                    <IoMdClose onClick={() => setHandelBurger(false)} />
                    :<IoMdMenu onClick={() => (setHandelBurger(true) )} />} 
                </div>
                <motion.div  className='nav-menu' initial="visible" animate={handelBurger|| browserWidth>960? "visible":"hidden"} variants={nav_actions} >
                    {/* initial="visible" animate={handelBurger? "hidden":"visible"} variants={nav_actions} */}
                    <motion.ul 
                        // initial="hidden"
                        // animate="visible"
                        // variants={container}
                        >
                        <motion.li >
                            <Route to='acceuil' link='/#acceuil' nav={true}>
                                <div onClick={() => setHandelBurger(false)} style={{display:'inline-block'}}>Accueil</div>
                            </Route>
                        </motion.li>
                        <motion.li    
                        >
                            <Route to='prestation' link='/#prestation' nav={true}>
                            <div onClick={() => setHandelBurger(false)} style={{display:'inline-block'}}>Prestation</div>
                            </Route>
                                
                        </motion.li>
                        <motion.li
                        >
                            <Route to='reservation' link='/#reservation' nav={true} >
                            <div onClick={() => setHandelBurger(false)} style={{display:'inline-block'}}>Réservation</div>
                            </Route>
                                
                        </motion.li>
                        <motion.li 
                        >
                            <Route to='contact' link='/#contact' nav={true}>
                            <div onClick={() => setHandelBurger(false)} style={{display:'inline-block'}}>Contact</div>
                            </Route>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </nav>
        </>
    );
}

export default Navbar;
