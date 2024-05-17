import React from 'react';

const Hero = ({heading, message}) => {
    return (
        <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img text-primary'>
            <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/ z-[2]" />
            
            <div className=" absolute p-5 text-center text-white z-[2] ">
                <h1 className="font-bigtext font-bold text-6xl">{heading}</h1> 
                <h2 className="font-bigtext  text-xl">{message}</h2>
                
            </div>
        </div>
    );
};

export default Hero;
