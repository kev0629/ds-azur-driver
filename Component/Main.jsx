import React from 'react';
import Image from 'next/image';
import bg from '../public/Images/Lexus_bg.jpg'
import { motion } from "framer-motion"

const Main = () => {
    return (
        <div className="home">
                <Image src={bg} 
                alt='Lexus'
                className='bg-main' 
                placeholder='blur'
                layout='fill'
                // width={1440}
                // height={787}
                />
                <h1 className='slogan beba-font'>Laissez-vous conduire.</h1>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='play-fair-font contact-button'>CONTACT</motion.button>
        </div>
    );
}

export default Main;
