import React,{ useState, useEffect } from 'react';
import Autocomplete from "react-google-autocomplete";
import {LoadScript, DistanceMatrixService } from "@react-google-maps/api";
import TittleSection from './TittleSection'
import Image from 'next/image';
import weel from '../public/Images/Roue.svg'
import loupe from '../public/Images/loupe.svg'
import background from '../public/Images/road.jpg'
import { motion, useAnimation } from "framer-motion"

function Reservation() {
    const [pickUp, setPickUp] = useState(null);
    const [dropOff, setDropOff] = useState(null);
    const [distance, setDistance] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [rotate, setRotate] = useState(0);
    const [ libraries ] = useState(['places']);
    useEffect(() => {
        setRotate(r => r+360);
    }, [distance]);
    return (
            <div className='reservation'>
                <Image 
                    src={background} 
                    alt='road'
                    placeholder='blur'
                    
                    className='bg'
                    layout="responsive"
                width={1440}
                height={850}/>
                    <div className="reservation-section">
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
                                    setPickUp(place.formatted_address)
                                }}
                                options={{
                                    types: ["geocode", "establishment"],
                                    fields:['ALL'],
                                    componentRestrictions: { country: "fr" },
                                }}
                                />
                            <div className="icon-search">
                                <Image src={loupe} alt='search' layout="responsive" />
                            </div>
                        </div> 
                        <div className="drop-off">
                            <Autocomplete
                                    className='input play-fair-font'
                                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                                    placeholder="Choissisez votre destination ..."
                                    onPlaceSelected={(place) => {
                                        setDropOff(place.formatted_address)
                                    }}
                                    options={{
                                        types: ["geocode", "establishment"],
                                        fields:['ALL'],
                                        componentRestrictions: { country: "fr" },
                                    }}
                                    />
                            <div className="icon-search">
                                <Image src={loupe} alt='search' />
                            </div>
                        </div> 
                        <div className="date-time">
                            <input type="date" className='input-date play-fair-font' onChange={(e)=>setDate(e.target.value)} />
                            <input type="time" className='input-time play-fair-font' onChange={(e)=>setTime(e.target.value)} />
                        </div> 
                        {/* <div className="options">
                            <button>Options</button>
                        </div> */}
                        <LoadScript
                            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                            libraries={libraries}>
                            {pickUp&&dropOff?<DistanceMatrixService
                            options={{
                                        origins: [pickUp],
                                        destinations: [dropOff],
                                        travelMode: "DRIVING",
                                    }}
                            callback = {(response, status) => {
                                if (response) {
                                    setDistance((response.rows[0].elements[0].distance.value/1000).toFixed(2))
                                }
                            }
                            }
                            />:console.log("No enouth data")}
                            <div className="result val-km">
                                <motion.div  animate={{ rotate: rotate }} transition={{ duration: 1 }}> 
                                    <Image src={weel} width={315} alt='distance' height={315} layout="responsive"/>
                                </motion.div>
                                <p className='result-quot'>{distance?distance+' km':''}</p>
                            </div>
                            <div className="result val-eur">
                                <motion.div  animate={{ rotate: rotate }} transition={{ duration: 1 }}>
                                    <Image src={weel} width={315} alt='prix' height={315} layout="responsive"/>
                                </motion.div>
                                <p className='result-quot'>{distance?(distance*3).toFixed(2)+' €':''} </p>
                            </div>
                        </LoadScript>
                    </div>
        </div>
    )
}

export default Reservation
