'use client'
// import styles from './page.module.css'
// import Video from 'next-video';
// import videoLoop from '../../videos/earth.mp4'
import Cards from './cards/page.js'

import styled from "styled-components"
import BgVid from "./components/BgVid"
import ContactCard from "./components/ContactCard"
const CanvasContainer=styled.div `
  width: 100%;
  height:100%; 
  `;

export default function Home() {
  return (
      <div>
        <BgVid/>
        <ContactCard/>
        <Cards/>
      </div>
  );
}
