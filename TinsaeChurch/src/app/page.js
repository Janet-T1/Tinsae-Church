
// import styles from './page.module.css'
// import Video from 'next-video';
// import videoLoop from '../../videos/earth.mp4'
import Cards from './cards/page.js'
import Hero from './components/Hero'


export default function Home() {
  return (
    <div>
      <Hero heading="Timothy Generation" message="Here to Impact, Uplift & Inspire the Youth of this Generation"/>
      <Cards/>
    </div>


    // <main  className="flex min-h-screen flex-col items-center justify-between p-24">

        

    //       <Hero/>
    //       <Cards/>

        



        
        
    
      
    //   {/* <Video
    //     src={videoLoop}
    //     autoPlay 
    //     muted
    //     loop
    //     playsInline
    //     controls={false}
    //     className={styles.video}
    //   ></Video> */}

    // </main>
  );
}
