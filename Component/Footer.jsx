import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-left'>
                MENTIONS LÉGALES <br />
                Propriétaire du site <br />
                M David Saffioti <br />
                Adresse : 30 traverse des Cades 06370 Mouans Sartoux <br />
                Tel : 06 08 07 08 73 <br />
                Email :  .... <br />
                Site réalisé et géré par KS Project <br />
                Hébergement chez .... <br />


                </div> 
                <div className='footer-right beba-font'>
                    CONTACT<br/>
                    <br/>
                    Adresse : 30 traverse des Cades 06370 Mouans Sartoux <br />
                    Tel : 06 08 07 08 73 <br />
                    Email :  .... <br />
                    <BsFacebook className='icon'/>
                    <BsInstagram className='icon'/>
                    <BsLinkedin className='icon'/>

                </div>   
            </div>
            
        </>
    )
}