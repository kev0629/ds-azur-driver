import React from 'react';
import TittleSection from '../Component/TittleSection'
import Image from 'next/image';
import frenchRiviera from '../public/Images/french_riviera.jpg'
const Contact = () => {
    return (
        <>
        <div className='bgWrap'>
            <Image
                alt="French Riviera"
                src={frenchRiviera}
                layout={"fill"}
                objectFit="cover"
                placeholder='blur'
            />
        </div>
        <p className='bgText'>
            Image Component
            <br />
            as a Background
            </p>
        
                
            {/* <div className='contact'>
                <div className="contact-title">
                        <TittleSection mainTitle='Contact' secondaryTitle='Disponible et à l’écoute' />
                </div>
            </div> */}
            {/*<div className='contact-card'>
                card
            </div>
            <div className='cadre'>
                <p>Ancien sportif de haut niveau dans le football, éducateur sportif, responsable de club, administratif hospitalier, j’ai eu envie de partager mes connaissances,
                de rencontrer un nouveau milieu et de nouvelles personnes dans un autre secteur d’activité qui est : « La location de Voitures de Transports avec Chauffeurs ».</p> 

                <p>Notre entreprise est basée en France à Mouans-Sartoux sur la Côte d’Azur. Nous vous assurons un transport en toute sécurité et discrétion vers la destination de votre choix avec un Chauffeur Privé VTC Professionnel et des véhicules tout confort pour rendre votre transport des plus agréables.<br />
                <br /> 
                Un service sur mesure toutes distances est mis à disposition, 7j/7 et 24h/24 à des tarifs attractifs et un prix fixe connu à la réservation.
                Vous pouvez réserver votre véhicule avec chauffeur par téléphone ou en ligne.</p> 
    
                <p>Ne vous souciez plus du trafic, de trouver une place de parking, des contrôles de Police… Laisser vous conduire ! </p>
   
            </div>
             */}
       </> 
    );
}

export default Contact;
