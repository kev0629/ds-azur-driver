import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Component/Navbar'
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
      </main>
    </div>
  )
}
