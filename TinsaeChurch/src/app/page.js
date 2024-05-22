'use client'
// import styles from './page.module.css'
// import Video from 'next-video';
// import videoLoop from '../../videos/earth.mp4'
import Cards from './cards/page.js'
import Hero from './components/Hero'
import styled from "styled-components"


const CanvasContainer=styled.div `
  width: 100%;
  height:100%; 
  `;

export default function Home() {
  return (
    <div>
      <Hero heading="Resurrection Church of Calgary Youth" message="Here to Impact, Uplift & Inspire the Youth of this Generation"/>
      <Cards/>
    </div>


    
    //   {/* <Video
    //     src={videoLoop}
    //     autoPlay 
    //     muted
    //     loop
    //     playsInline
    //     controls={false}
    //     className={styles.video}
    //   ></Video> */}

   
  );
}
