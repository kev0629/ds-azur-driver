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
import DatePicker from "react-datepicker";
import elipse from './../public/Images/Ellipse 1.png'
import elipseFill from './../public/Images/Ellipse 2.png'
import point from './../public/Images/Vector.png'

import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';


function Reservation() {
    const [pickUp, setPickUp] = useState(null);
    const [dropOff, setDropOff] = useState(null);
    const [distance, setDistance] = useState(null);
    const [date, setDate] = useState(false);
    const [time, setTime] = useState('');
    const [inputTimeType, setInputTimeType] = useState('text')
    const [rotate, setRotate] = useState(0);
    const [ libraries ] = useState(['places']);
    useEffect(() => {
        setRotate(r => r+360);
    }, [distance]);

    const [autocompletePickUp, setAutocompletePickUp] = useState(null)
    const [autocompleteDropOff, setAutocompleteDropOff] = useState(null)

    const onPickUpLoad = (autocompleteObj) => {
        setAutocompletePickUp(autocompleteObj)
    }

    const onDropOffLoad = (autocompleteObj) => {
        setAutocompleteDropOff(autocompleteObj)
    }

    const onPickUpChanged = () => {
        if (autocompletePickUp) {
        const place = autocompletePickUp.getPlace()
        setPickUp(place.formatted_address)
        }
    }

    const onDropOffChanged = () => {
        if (autocompleteDropOff) {
        const place = autocompleteDropOff.getPlace()
        setDropOff(place.formatted_address)
        }
    }

    const changeInputToTime = () => {
        if (inputTimeType == 'text'){
            var current = new Date();
            setInputTimeType('time')
            let h = current. getHours();
            let m = current. getMinutes()
            setTime(`${h}:${m}`)

        }
    }

    return (
            <section className='reservation' id='reservation'>
                
                    <div className="reservation-section">
                        <div className="title">
                            <TittleSection mainTitle='Réservation' secondaryTitle='Votre devis sur mesure' />
                        </div> 
                        <div className="res-icons">
                            {/* <div className='elipse-res'>
                            <Image src={elipse} alt='elipse' />
                            </div> */}
                            {/* <div className='elipsefill1-res'>
                            <Image src={elipseFill} alt='elipse filled' />
                            </div>
                            <div className='elipsefill2-res'>
                            <Image src={elipseFill} alt='elipse filled' />
                            </div> */}
                            {/* <div className='point-res'>
                                <Image src={point} alt='point' />
                            </div> */}
                        </div> 
                        <div className="pick-up">
                            <InputAutocomplete placeHolder="Choissisez votre point de départ ..." onPlaceChanged={onPickUpChanged} onLoad={onPickUpLoad}/>
                            <div className='elipsefill-res elipse-top'>
                                <Image src={elipseFill} alt='elipse filled' />
                            </div>
                            <div className='elipse-res'>
                                <Image src={elipse} alt='elipse' />
                            </div>
                            <div className="icon-search">
                                <Image src={loupe} alt='search' />
                            </div>
                        </div>
                        <div className="drop-off">
                            <InputAutocomplete placeHolder="Choissisez votre destination ..." onPlaceChanged={onDropOffChanged} onLoad={onDropOffLoad}/>
                            <div className='elipsefill-res elipse-bottom'>
                                <Image src={elipseFill} alt='elipse filled' />
                            </div>
                            <div className='point-res'>
                                <Image src={point} alt='point' />
                            </div>
                            
                            <div className="icon-search">
                                <Image src={loupe} alt='search' />
                            </div>
                        </div>
                        <div className="date-time">
                            <DatePicker className='input-date play-fair-font' placeholderText="Date" selected={date} onChange={(date) => setDate(date)}/>
                            {/* <TimePicker showSecond={false} defaultValue={now} className="input-time play-fair-font" onChange={onChange} format={format} inputReadOnly/> */}
                            {/* <input type="date" className='input-date play-fair-font' onChange={(e)=>setDate(e.target.value)} /> */}
                            {/* <input type={inputTimeType} placeholder='Heure' className='input-time play-fair-font' onClick={changeInputToTime} value={time} onChange={(e)=>setTime(e.target.value)} />  */}
                            <TimePicker style={{ width: 100 }} showSecond={true} defaultValue={moment()} className='input-time play-fair-font' onChange={(e)=>setTime(e.target.value)}/>
                        </div>  
                        {/* <div className="options">
                            <button>Options</button>
                        </div> */}
                    </div>
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
                            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',paddingBottom:25}}>
                                <div className='wheel'>
                                    <motion.div  animate={{ rotate: rotate }} transition={{ duration: 1 }}> 
                                        <Image src={weel} width={315} alt='distance' height={315} layout="responsive"/>
                                    </motion.div>
                                    <div className='result-quot'>{distance?distance+' km':''}</div>
                                </div>
                                <div className='wheel'>
                                    <motion.div  animate={{ rotate: rotate }} transition={{ duration: 1 }}>
                                        <Image src={weel} width={315} alt='prix' height={315} layout="responsive"/>
                                    </motion.div>
                                    <div className='result-quot'>{distance?(distance*2.5).toFixed(2)+' €':''} </div>
                                </div>
                            </div>
                        </LoadScript>
        </section>
    )
}

export default Reservation
