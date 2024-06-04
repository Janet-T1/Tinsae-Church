import React from 'react';

function BgVid() {
    
    return (
        <div className="w-screen h-scren m-0 p-0 flex items-center justify-center bg-fixed bg-center bg-cover bg-transparent">
            <video src={"peopleWalking.mp4"} autoPlay loop muted className="w-screen h-screen object-cover" />
            <div className= "absolute p-5 text-center text-white z-[2]">
                <h1 className="font-bigtext text-7xl font-bold uppercase"> RESURRECTION  </h1>
                <h1 className="font-bigtext text-7xl font-bold uppercase"> church YOUTH</h1>
                <h2 className="font-arial text-2xl uppercase ">Impacted, Changed and Compelled by the love of Our beloved Jesus </h2>
            </div>
        </div>
        
    );
};

export default BgVid;