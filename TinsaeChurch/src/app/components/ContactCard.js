// components/ContactCard.js
import React from 'react';

function ContactCard() {
    return (
        <div className="flex flex-col items-center justify-center w-screen m-0 p-10 bg-secondary h-1/2">
            <h1 className="text-white text-5xl mb-6">WATCH THE LATEST TEACHING</h1>
            <video src="/teaching.mp4" controls className="w-1/2 h-auto mb-4" />

            <div className="flex flex-col items-center bg-red-500 p-10 bg-red w-screen">
                <h1 className="text-white text-5xl mb-6 ">CONTACT US HERE</h1>
                <button className="bg-white hover:bg-[#EFEFEF] rounded-sm p-3 text-smalltext text-xl font-semibold shadow-md">
                    CONTACT CARD
                </button>
            </div>
        </div>
    );
}

export default ContactCard;
