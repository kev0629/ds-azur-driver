import React, {useState} from 'react';
import Image from 'next/image';
import Route from './Route';
import { motion } from "framer-motion"
import {IoMdMenu,IoMdClose} from 'react-icons/io';
import logo from '../public/Images/logo_white.png';
import Flags from 'country-flag-icons/react/3x2'
import useDimension from '../Hook/useDimension';

const Navbar = (props) => {

    const browserWidth = useDimension();
    
    const [handelBurger, setHandelBurger] = useState(true);

    const nav_actions = {
        visible:{display:'Block'},
        hidden:{display:'None'}
    }

    const variants = {
        visible: { opacity: 1,
                    transition: {
                        delayChildren: 0.5,
                        staggerDirection: -1
                        
                    } },
        hidden: { opacity: 0,},
      }
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }      

    return (
        <div>
            <nav className="navbar">
                <div className='logo-section'>
                    <Route to='acceuil' link='/#acceuil' nav={false}>
                        <a><Image src={logo} width={894/9} height={383/9} className='logo' alt="logo"  /></a>
                    </Route>
                </div>
                <div className='title'>
                    <p className='main-title'>DS AZUR DRIVER</p>
                    <p className='secondary-title'>by David Saffioti</p>
                </div>
                <div className='nav-burger'>
                    {handelBurger?
                    <IoMdMenu onClick={() => (setHandelBurger(false) )} />
                    :<IoMdClose onClick={() => setHandelBurger(true)} />}
                </div>
                {console.log(browserWidth)}
                <motion.div initial="hidden" animate={handelBurger? "hidden":"visible"} variants={nav_actions} className='nav' >
                    <motion.ul 
                        initial="hidden"
                        animate={handelBurger ? "hidden" : "visible"}
                        variants={variants}>
                        <motion.li variants={handelBurger ? "show" : "hidden"}>
                            <Route to='acceuil' link='/#acceuil' nav={true}>
                                <a>Accueil</a>
                            </Route>
                        </motion.li>
                        <motion.li variants={handelBurger ? "show" : "hidden"}>
                            <Route to='prestation' link='/#prestation' nav={true}>
                                <a>Prestation</a>
                            </Route>
                                
                        </motion.li>
                        <motion.li variants={handelBurger ? "show" : "hidden"}>
                            <Route to='reservation' link='/#reservation' nav={true}>
                                <a>Réservation</a>
                            </Route>
                                
                        </motion.li>
                        <motion.li variants={handelBurger ? "show" : "hidden"} >
                            <Route to='contact' link='/#contact' nav={true}>
                                <a>Contact</a>
                            </Route>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </nav>
        </div>
    );
}

export default Navbar;
