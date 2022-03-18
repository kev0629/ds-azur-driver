import { Card } from './Card';
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import TittleSection from './TittleSection'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image'
import { HiOutlineChevronUp,HiOutlineChevronDown} from 'react-icons/hi'
import presentation1 from './../public/Images/presentation.png'
import presentation2 from './../public/Images/presentation.png'
import presentation3 from './../public/Images/presentation.png'
import presentation4 from './../public/Images/presentation.png'



function Prestation() {
    const [handelList, setHandelList] = useState(false);
    const [breakPoints, setBreakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4},
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
      );
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
                            {handelList?<HiOutlineChevronUp/>:<HiOutlineChevronDown/> }
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="caroussel">
            <Carousel itemsToShow={4} breakPoints={breakPoints} pagination={false} >
                <Card   img={presentation1}  title={"SÉCURITÉ ET DISCRÉTION"} text={'Nous assurons votre transport avec professionnalisme.'} />
                <Card   img={presentation1}  title={"SERVICE DE QUALITÉ"} text={'Un service haut de gamme destiné à rendre vos trajets plus agréables.'} />
                <Card   img={presentation1}  title={"PONCTUALITÉ ET CONFORT"} text={'Voyagez à bord de véhicules luxueux avec de nombreux services.'} />
                <Card   img={presentation1}  title={"TRANSPARANCE ET SIMPLICITÉ"} text={'Les tarifs sont forfaitaires et établis à l’avance lors de la demande de réservation.'} />
            </Carousel>
            </div>
            
        </section>
    )
}

function PrestaListContent(props){
    return(
        <AnimatePresence >
            {props.handelList&&(
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
                </motion.div>
            )}
        </AnimatePresence>
        
    )

}

export default Prestation
