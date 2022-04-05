import React,{ useState, useEffect, useRef } from 'react';
// import Autocomplete from "react-google-autocomplete";
import { useLoadScript, Autocomplete, DistanceMatrixService, LoadScript } from "@react-google-maps/api";
import TittleSection from './TittleSection'
import Image from 'next/image';
import weel from '../public/Images/Roue.svg'
import loupe from '../public/Images/loupe.svg'
import background from '../public/Images/road.jpg'
import { motion, useAnimation } from "framer-motion"
import InputAutocomplete from './InputAutocomplete';

const scriptOptions = {
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: ['places'],
  }

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


    // const { isLoaded, loadError } = useLoadScript(scriptOptions)
    // const [autocomplete, setAutocomplete] = useState(null)
    // const inputEl = useRef(null)

    // const onKeypress = (e) => {
    //     if (e.key === 'Enter') {
    //     e.preventDefault()
    //     return false
    //     }
    // }



    // const onLoad = (autocompleteObj) => {
    //     setAutocomplete(autocompleteObj)
    // }

    // const onDropOffChange = (e) => {
    //     if (autocomplete) {
    //     const place = autocomplete.getPlace()
    //     console.log(e)
    //     }
    // }

    // const onPickUpChange = (e) => {
    //     if (autocomplete) {
    //     const place = autocomplete.getPlace()
    //     console.log(place)
    //     }
    // }


    return (
            <section className='reservation' id='reservation'>
                
                    <div className="reservation-section">
                        <div className="title">
                            <TittleSection mainTitle='Réservation' secondaryTitle='Votre devis sur mesure' />
                        </div> 
                        <div className="res-icons">
                        </div> 
                        {/* <div className="pick-up">
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
                                <>
                            <div className="icon-search">
                                <Image src={loupe} alt='search' layout="responsive" />
                            </div>
                        </div>  */}
                        {/* <div className="drop-off">
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
                        </div>  */}
                        <div className="pick-up">
                            <InputAutocomplete placeHolder="Choissisez votre point de départ ..." onPlaceSelected={(place) => {
                                        console.log(place)
                                        // setPickUp(place.formatted_address)
                                    }}/>
                            <div className="icon-search">
                                <Image src={loupe} alt='search' />
                            </div>
                        </div>
                        <div className="drop-off">
                            <InputAutocomplete placeHolder="Choissisez votre destination ..." onPlaceSelected={(place) => {
                                        console.log(place)
                                        // setDropOff(place.formatted_address)
                                    }}/>
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
                            {pickUp&&dropOff&&<DistanceMatrixService
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
                            />}
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
        </section>
    )
}

export default Reservation
