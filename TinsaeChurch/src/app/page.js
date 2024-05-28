'use client'
// import styles from './page.module.css'
// import Video from 'next-video';
// import videoLoop from '../../videos/earth.mp4'
import Cards from './cards/page.js'
import BgVid from "./components/BgVid"
import ContactCard from "./components/ContactCard"


export default function Home() {

  // useEffect(() => {
  //   const lenis = new 
  // })
  return (
      <div>
        <BgVid/>
        <ContactCard/>
        <Cards/>
      </div>
  );
}
