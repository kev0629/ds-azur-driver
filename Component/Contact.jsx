import React, {useState,useEffect} from 'react';
import Link from 'next/link'
import TittleSection from '../Component/TittleSection'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineChevronUp,HiOutlineChevronDown} from 'react-icons/hi'
import {HiOutlineMail, HiOutlinePhone} from 'react-icons/hi';
import frenchRiviera from '../public/Images/french_riviera.jpg'
import profile_pic from '../public/Images/Ellipse_DS.png'



const Contact = () => {
    const [handelDescription, setHandelDescription] = useState(false);
    const [widthDescription, setWidthDescription] = useState('60%');
    const [heightDescription, setHeightDescription] = useState('auto');
    const bio = (
                <>
                    Ancien sportif de haut niveau dans le football, éducateur sportif, responsable de club, 
                    administratif hospitalier, j’ai eu envie de partager mes connaissances, 
                    de rencontrer un nouveau milieu et de nouvelles personnes dans un autre secteur d’activité qui est : 
                    « La location de Voitures de Transports avec Chauffeurs ». <br/>
                    <br/>
                    Notre entreprise est basée en France à Mouans-Sartoux sur la Côte d’Azur. 
                    Nous vous assurons un transport en toute sécurité et discrétion vers la destination de votre choix avec un Chauffeur Privé VTC Professionnel et des véhicules tout confort pour rendre votre transport des plus agréables.<br/><br/> 
                    Un service sur mesure toutes distances est mis à disposition, 7j/7 et 24h/24 à des tarifs attractifs et un prix fixe connu à la réservation.
                    Vous pouvez réserver votre véhicule avec chauffeur par téléphone ou en ligne. <br />
                    <br />
                    Ne vous souciez plus du trafic, de trouver une place de parking, des contrôles de Police… Laissez-vous conduire !<br/>
                    <br />
                </>
                )
                const pres = {
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, y: -100 },
                  }
    function dropDownDescription() {
        setHandelDescription(true)
        setWidthDescription('90%')
        setHeightDescription('99%')
    }

    function dropUpDescription() {
        setHandelDescription(false)
        setWidthDescription('60%')
    }
    return (
        <section className='contact' id='contact'>
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-title">
                    <TittleSection mainTitle='Contact' secondaryTitle='Disponible et à l’écoute' />
                    </div>  
                
                    
                <div className='contact-card'>
                <div className="profile-pic">
                        <Image
                        alt='profile picture'
                        src={profile_pic}
                        width={100}
                        height={100}
                        />
                    </div>
                        <div className='contact-card-content'>
                            <p className='beba-font contact-card-title' >DAVID SAFFIOTI</p> 
                            <p className='contact-card-text-main'>Chauffeur Privé</p>
                            <p className='infos-contact'>
                            <div>
                                <div style={{display:'inline-block', verticalAlign:'center', margin:3}}>
                                    <HiOutlineMail/>
                                </div>
                                <Link href="mailto:david.saffioti@dsazurdriver.fr">
                                        david.saffioti@dsazurdriver.fr
                                </Link>
                            </div>
                            <div style={{display:'inline-block', verticalAlign:'center', margin:3}}>
                                <HiOutlinePhone/>
                            </div>
                            <a href="tel:+330608070873">06.08.07.08.73</a></p>
                            <p>Course uniquement sur réservation</p>
                        </div>
                    </div>
                    <motion.div className='contact-presentation-button' 
                    animate={
                        {
                            width:widthDescription,
                            height:heightDescription
                        }
                    } 
                     >
                        <div onClick={dropDownDescription}>
                            {}
                            {!handelDescription&&'Voir ma bio'}
                            {!handelDescription&&<HiOutlineChevronDown/>}
                        </div>
                        
                        {handelDescription&&<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay:0.5}} exit={{ opacity: 0 }}>{bio}</motion.div>}
                        {handelDescription&&<div onClick={dropUpDescription}><HiOutlineChevronUp/></div>}
                    </motion.div>
                </div>
                <div className="contact-right" style={{padding:10}}>
                    {bio}
                </div>
            </div>
       </section> 
    );
}

export default Contact;
