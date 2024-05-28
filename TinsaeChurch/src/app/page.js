'use client'
// import styles from './page.module.css'
// import Video from 'next-video';
// import videoLoop from '../../videos/earth.mp4'
import Cards from './cards/page.js'
import BgVid from "./components/BgVid"
import ContactCard from "./components/ContactCard"
import React, {useEffect } from 'react';
import Lenis from 'lenis';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis() 

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf) 
    }

    requestAnimationFrame(raf)
  }, [])


  return (
      <div>
        <BgVid/>
        <ContactCard/>
        <Cards/>
      </div>
  );
}
