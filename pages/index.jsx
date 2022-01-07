import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Component/Navbar'
import Main from '../Component/Main'
import WhiteLine from '../Component/WhiteLine'
import Prestation from '../Component/Prestation'
import Reservation from '../Component/Reservation'
import Contact from '../Component/Contact'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const [language, setLanguage] = useState('fr');
  return (
    <div>
      <Head>
        <title>DS Azur Drive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar language={language} />
        <Main language={language} />
        <WhiteLine />
        <Prestation language={language} />
        <WhiteLine />
        <Reservation/>
        <WhiteLine />
        <Contact/>
      </main>
    </div>
  )
}
