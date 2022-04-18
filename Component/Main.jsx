import React from 'react';
import Image from 'next/image';
import Route from './Route';
import bg from '../public/Images/Lexus_bg.jpg'
import { motion } from "framer-motion"

const Main = () => {
    return (
        <section className="home" id='acceuil'>
                <Image src={bg} 
                alt='Lexus'
                className='bg-main' 
                placeholder='blur'
                layout='responsive'
                height={1080}
                width={1920}
                />
                <h1 className='slogan beba-font'>Laissez-vous conduire.</h1>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='play-fair-font contact-button'>
                <Route to='contact' link='/#contact' nav={false}>
                        Contact
                </Route>
                </motion.button>
        </section>
    );
}

export default Main;
