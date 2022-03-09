import React from 'react'
import TittleSection from './TittleSection'
import Image from 'next/image'
import presentation1 from './../public/Images/presentation.png'
import presentation2 from './../public/Images/presentation.png'
import presentation3 from './../public/Images/presentation.png'
import presentation4 from './../public/Images/presentation.png'

function Prestation() {
    return (
        <section className='prestation' id='prestation'>
            <div className="prestation-grid-top">
                <div className="presta-top-left prestation-title">
                    <TittleSection mainTitle='quelque soit vos besoins' secondaryTitle='Nos prestations sur mesure' />
                </div>
                <div className="presta-top-right prestations-list">
                    <p className='prestations-list-title beba-font'>TRAJETS TOUTES DISTANCES : </p>
                    <p className='prestations-list-text'>vous rendre dans la ville voisine, à l’autre bout du pays ou à l’étranger.</p>
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>FORFAITS AÉROPORTS : </p>
                    <p className='prestations-list-text'>vous arrivez à l’aéroport et vous avez un rendez-vous privé ou professionel à honorer. Nice, Mandelieu, Hyères, Marseille, Monaco...</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>FORFAITS GARES : </p>
                    <p className='prestations-list-text'> vous arrivez en gare et vous avez un rendez-vous privé ou professionel à honorer.</p>
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>BUSINESS : </p>
                    <p className='prestations-list-text'>déplacez-vous en toute tranquilité pour vos rendez-vous, reunions, séminaires ...</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>ORFAITS MARIAGES/ ÉVÈNEMENTS: </p>
                    <p className='prestations-list-text'>profitez de votre évènement, notre chauffeur s’occupe des transferts pour vous et vos convives.</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>TOURISME: </p>
                    <p className='prestations-list-text'>venez visiter, nous créons des circuits touristiques sur mesure pour vos envies.</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>MISE À DISPOSITION : </p>
                    <p className='prestations-list-text'>nous contacter pour plus d’informations.</p> 
                    <br />
                    
                </div>
            </div>
            <div className="prestation-grid-bottom">
                <div className="first-card card">
                    <Image src={presentation1} placeholder="blur" alt='presentation'layout='responsive' />
                    <div className='card-text'>
                        <p className='beba-font'>SÉCURITÉ ET DISCRÉTION</p>
                        <div className="card-line"></div>
                        <p className='text-card'>Nous assurons votre transport avec professionnalisme. </p>
                    </div>
                    
                </div>
                <div className="second-card card">
                    <Image src={presentation2} placeholder="blur" alt='presentation' layout='responsive' />
                    <div className='card-text'>
                        <p className='beba-font'>SERVICE DE QUALITÉ</p>
                    <div className="card-line"></div>
                    <p className='text-card'>Un service haut de gamme destiné à rendre vos trajets plus agréables.</p>
                    </div>
                    
                </div>
                <div className="third-card card">
                <Image src={presentation3} placeholder="blur" alt='presentation' layout='responsive' />
                    <div className='card-text'>
                        <p className='beba-font'>PONCTUALITÉ ET CONFORT</p>
                        <div className="card-line"></div>
                        <p className='text-card'>Voyagez à bord de véhicules luxueux avec de nombreux services.</p>
                    </div>
                </div>
                <div className="fourth-card card">
                <Image src={presentation4}  placeholder="blur" alt='presentation' layout='responsive' />
                    <div className='card-text'>
                        <p className='beba-font'>TRANSPARANCE ET SIMPLICITÉ</p>
                        <div className="card-line"></div>
                        <p className='text-card'>Les tarifs sont forfaitaires et établis à l’avance lors de la demande de réservation.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Prestation
