import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-left'>
                MENTIONS LÉGALES <br />
                Propriétaire du site 
                M David Saffioti <br />
                Adresse : 30 traverse des Cades 06370 Mouans Sartoux <br />
                Tel : <a href="tel:+330608070873">06.08.07.08.73</a> <br />
                Email :  <a href="david.saffioti@dsazurdriver.fr">david.saffioti@dsazurdriver.fr</a><br />
                Site réalisé et géré par KS Project <br />
                Hébergement chez .... <br />


                </div> 
                <div className='footer-right beba-font'>
                    CONTACT<br/>
                    <br/>
                    Adresse : 30 traverse des Cades 06370 Mouans Sartoux <br />
                    Tel : <a href="tel:+330608070873">06.08.07.08.73</a> <br />
                    Email :  <a href="david.saffioti@dsazurdriver.fr">david.saffioti@dsazurdriver.fr</a> <br />
                    <Link href="https://www.facebook.com/DS-Azur-Driver-107376328499902/" passHref={true}><BsFacebook className='icon'/></Link>
                    <Link href="https://instagram.com/dsazurdriver?utm_medium=copy_link" passHref={true}><BsInstagram className='icon'/></Link>
                    <Link href={"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D33608070873%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR35-Q4Ns5wXOtcvrtRQQoIi6F7cHGxmsDiHz3yIgiHxrXt06B7UMG_Z-QI&h=AT1LBqBfSMXB15Zs4GaJeW49jc035cRduW_K4D9BCQJ0q_yO1rJ7iKLeeMwgJhkOCMvXyiRemNOzXdt9vizH8HQzBjkGa6wrYXoTLhwUDq0JSJ_RGFjNp6mpRQNOXF-R8XGoUIA3soFoxO0"} passHref={true}> <BsWhatsapp className='icon'/></Link>
                    <Link href="https://www.linkedin.com/in/david-saffioti-236a35b1/" passHref={true}> <BsLinkedin className='icon'/></Link>
                </div>   
            </div>
            
        </>
    )
}