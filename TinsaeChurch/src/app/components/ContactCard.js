// components/ContactCard.js
import React from 'react';
import Link from 'next/link';

function ContactCard() {
    return (
        <div className="flex flex-col items-center justify-center w-screen m-0 p-10 h-1/2  bg-[#1d1d1d] ">
            <h1 className="text-white text-5xl mb-6">WATCH THE LATEST TEACHING</h1>
            <video src="/teaching.mp4" controls className="w-1/2 h-auto mb-4" />

            <div className="flex flex-col items-center bg-red-800 p-10 w-screen font-semibold">
                <h1 className="text-white text-5xl mb-6 ">CONTACT US HERE</h1>
                <button className="bg-white hover:bg-[#EFEFEF]  p-3 text-smalltext text-xl font-semibold shadow-md">
                    <Link href="/contact">CONTACT CARD</Link>
                </button>
            </div>
        </div>
    );
}

export default ContactCard;


