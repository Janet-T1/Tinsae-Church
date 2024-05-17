import React from 'react';
import earth from '../../../videos/earth.mp4'
function Video() {
    
    return (
        <div>
            <video src={earth} autoplay loop muted>


            </video>
        </div>
        
        


    //  <video width="700px" height="700px" controls preload="none">
    //     <source src="../../public/vidBeach.mp4" type="video/mp4">

    //     </source>
        
    //  </video>
    );
};

export default Video;




