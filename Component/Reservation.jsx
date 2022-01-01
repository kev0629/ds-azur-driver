import React from 'react'
import TittleSection from './TittleSection'

function Reservation() {
    return (
        <div>
            
            <div className="reservation"> 
                <div className="title">
                    <TittleSection mainTitle='Réservation' secondaryTitle='Votre devis sur mesure' />
                </div> 
                <div className="res-icons">
                </div> 
                <div className="pick-up">
                    <input type="text" placeholder="Lieu de départ" />
                </div> 
                <div className="drop-off">
                <input type="text" placeholder="Lieu d'arrivé" />
                </div> 
                <div className="date-time">
                <input type="date" placeholder="Date de départ" />
                <input type="time" placeholder="Date de départ" />
                </div> 
                <div className="options">
                    <button>Options</button>
                </div> 
                <div className="val-km">
                    km
                </div> 
                <div className="val-eur">
                    eur
                </div> 
            </div>
        </div>
    )
}

export default Reservation
