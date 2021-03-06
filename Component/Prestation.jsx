import { Card } from './Card';
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import TittleSection from './TittleSection'
import Carousel from 'react-elastic-carousel'
import { Slide } from "react-slideshow-image";
import Image from 'next/image'
import { HiOutlineChevronUp,HiOutlineChevronDown} from 'react-icons/hi'
import presentation1 from './../public/Images/Frame 7.png'
import presentation2 from './../public/Images/Frame 8.png'
import presentation3 from './../public/Images/Frame 9.png'
import presentation4 from './../public/Images/Frame 11.png'
import useDimension from '../Hooks/useDimension';

import 'react-slideshow-image/dist/styles.css'



function Prestation() {
    const [handelList, setHandelList] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(4); 
    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
      };
      const style = {
        textAlign: 'center',
        background: 'grey',
        padding: '0 0 200px 0',
        margin: '10px',
        fontSize: '30px'
      };
      
    
    const  height  = useDimension();

    // const [listHeight, setListHeight] = useState('auto');
    // useEffect(() => {
    //     if (handelList){
    //         setListHeight('490px');
    //         setListHeight('auto')
    //     }
    //     else{
    //         setListHeight('auto');
    //     }
        
    // }, [handelList]);


    

    return (
        <section className='prestation' id='prestation'>
            <div className="prestation-grid-top">
                <div className="presta-top-left prestation-title">
                    <TittleSection mainTitle='quelque soit vos besoins' secondaryTitle='Nos prestations sur mesure' />
                </div>
                <div className="presta-top-right">
                    <motion.div className="prestations-list" transition={{ duration: 2 }}>
                        <PrestaListContent handelList={handelList} setHandelList={setHandelList} />
                        <motion.div 
                        onClick={() => setHandelList(!handelList)} 
                        style={{textAlign:'center'}}>
                            {handelList?<HiOutlineChevronUp style={{cursor:'pointer'}}/>:'Voir nos prestations en d??tail ' }
                            {handelList?'':<HiOutlineChevronDown style={{cursor:'pointer'}}/>}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div>
                <div>
                <Slide {...properties} style={{margin:'10px'}}>
                    <Card   img={presentation1}  title={"S??CURIT?? ET DISCR??TION"} text={'Nous assurons votre transport avec professionnalisme.'} />
                    <Card   img={presentation2}  title={"SERVICE DE QUALIT??"} text={'Un service haut de gamme destin?? ?? rendre vos trajets plus agr??ables.'} />
                    <Card   img={presentation3}  title={"PONCTUALIT?? ET CONFORT"} text={'Voyagez ?? bord de v??hicules luxueux avec de nombreux services.'} />
                    <Card   img={presentation4}  title={"TRANSPARANCE ET SIMPLICIT??"} text={'Les tarifs sont forfaitaires et ??tablis ?? l???avance lors de la demande de r??servation.'} />
                </Slide>
                </div>
                </div>
            {/* <div className="caroussel">
            <Carousel itemsToShow={4} breakPoints={breakPoints} pagination={false} >
                <Card   img={presentation1}  title={"S??CURIT?? ET DISCR??TION"} text={'Nous assurons votre transport avec professionnalisme.'} />
                <Card   img={presentation2}  title={"SERVICE DE QUALIT??"} text={'Un service haut de gamme destin?? ?? rendre vos trajets plus agr??ables.'} />
                <Card   img={presentation3}  title={"PONCTUALIT?? ET CONFORT"} text={'Voyagez ?? bord de v??hicules luxueux avec de nombreux services.'} />
                <Card   img={presentation4}  title={"TRANSPARANCE ET SIMPLICIT??"} text={'Les tarifs sont forfaitaires et ??tablis ?? l???avance lors de la demande de r??servation.'} />
            </Carousel>
            </div> */}
            
        </section>
    )
}

function PrestaListContent(props){
    return(
        <AnimatePresence >
            {props.handelList&&(
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className='prestations-list-title beba-font'>TRAJETS TOUTES DISTANCES : </p>
                    <p className='prestations-list-text'>vous rendre dans la ville voisine, ?? l???autre bout du pays ou ?? l?????tranger.</p>
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>FORFAITS A??ROPORTS : </p>
                    <p className='prestations-list-text'>vous arrivez ?? l???a??roport et vous avez un rendez-vous priv?? ou professionel ?? honorer. Nice, Mandelieu, Hy??res, Marseille, Monaco...</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>FORFAITS GARES : </p>
                    <p className='prestations-list-text'> vous arrivez en gare et vous avez un rendez-vous priv?? ou professionel ?? honorer.</p>
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>BUSINESS : </p>
                    <p className='prestations-list-text'>d??placez-vous en toute tranquilit?? pour vos rendez-vous, reunions, s??minaires ...</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>FORFAITS MARIAGES/ ??V??NEMENTS: </p>
                    <p className='prestations-list-text'>profitez de votre ??v??nement, notre chauffeur s???occupe des transferts pour vous et vos convives.</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>TOURISME: </p>
                    <p className='prestations-list-text'>venez visiter, nous cr??ons des circuits touristiques sur mesure pour vos envies.</p> 
                    <br />
                    <br />
                    <p className='prestations-list-title beba-font'>MISE ?? DISPOSITION : </p>
                    <p className='prestations-list-text'>nous contacter pour plus d???informations.</p> 
                    <br />
                </motion.div>
            )}
        </AnimatePresence>
        
    )

}

export default Prestation
