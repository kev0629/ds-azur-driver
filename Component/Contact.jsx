import React from 'react';
import TittleSection from '../Component/TittleSection'
import Image from 'next/image';
import frenchRiviera from '../public/Images/french_riviera.jpg'
import profile_pic from '../public/Images/Ellipse_DS.png'
const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-title">
                    <TittleSection mainTitle='Contact' secondaryTitle='Disponible et à l’écoute' />
                    </div>  
                
                    <div className="profile-pic">
                        <Image
                        alt='profile picture'
                        src={profile_pic}
                        width={100}
                        height={100}
                        />
                </div>
                <div className='contact-card'>
                        <div className='contact-card-content'>
                            <p className='beba-font' style={{fontSize: 40, margin:0}}>DAVID SAFFIOTI</p> 
                            <p style={{fontSize: 25, margin:0}}>Chauffeur Privé</p>
                            <p className='infos-contact'><a href="david.saffioti@dsazurdriver.fr">david.saffioti@dsazurdriver.fr</a> <a href="tel:+330608070873">06.08.07.08.73</a></p>
                            <p>Course uniquement sur réservation</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right" style={{padding:10}}>
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
                        

                </div>
            </div>
       </section> 
    );
}

export default Contact;
