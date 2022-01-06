import React,{ useState } from 'react';
import Autocomplete from "react-google-autocomplete";
import {LoadScript, DistanceMatrixService } from "@react-google-maps/api";
import TittleSection from './TittleSection'

function Reservation() {
const [pickUp, setPickUp] = useState(null);
  const [dropOff, setDropOff] = useState(null);
  const [distance, setDistance] = useState(null);
    return (
        <div>
            
            <div className="reservation"> 
                <div className="title">
                    <TittleSection mainTitle='Réservation' secondaryTitle='Votre devis sur mesure' />
                </div> 
                <div className="res-icons">
                </div> 
                <div className="pick-up">
                    <Autocomplete
                        className='input play-fair-font'
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                        placeholder="Choissisez votre point de départ ..."
                        onPlaceSelected={(place) => {
                            console.log(setPickUp(place.formatted_address))
                        }}
                        options={{
                            types: ["geocode", "establishment"],
                            fields:['ALL'],
                            componentRestrictions: { country: "fr" },
                        }}
                        />
                </div> 
                <div className="drop-off">
                <Autocomplete
                        className='input play-fair-font'
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                        placeholder="Choissisez votre destination ..."
                        onPlaceSelected={(place) => {
                            console.log(setDropOff(place.formatted_address))
                        }}
                        options={{
                            types: ["geocode", "establishment"],
                            fields:['ALL'],
                            componentRestrictions: { country: "fr" },
                        }}
                        />*
                </div> 
                <div className="date-time">
                <input type="date" />
                <input type="time" />
                </div> 
                <div className="options">
                    <button>Options</button>
                </div>
                <LoadScript
                    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                    libraries={['places']}>
                    {pickUp&&dropOff?<DistanceMatrixService
                    options={{
                                origins: [pickUp],
                                destinations: [dropOff],
                                travelMode: "DRIVING",
                            }}
                    callback = {(response) => {
                        if (pickUp && dropOff) {
                        setDistance((response.rows[0].elements[0].distance.value/1000).toFixed(2))
                        }
                    }
                    }
                    />:console.log("No enouth data")}
                    {distance?<div className="result val-km">
                    {           distance} km
                              </div> 
                              :''}
                    {distance?<div className="result val-eur">
                                {(distance*3).toFixed(2)} euros
                              </div>:''}
                </LoadScript>
            </div>
        </div>
    )
}

export default Reservation
