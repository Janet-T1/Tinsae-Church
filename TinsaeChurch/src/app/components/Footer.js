import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {

        return (
          

            <div className='bottom-0 w-screen '>
                {/* parent container for the footer */}
                <div className='w-screen pt-5 bg-black flex flex-col text-white'>
                    {/* div parent for icons and page lists */}
                    <ul className='flex text-primary justify-center gap-3 text-xl '>
                    
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaTiktok/></li>
                        <li><FaYoutube/></li>
                    </ul>
                    <ul className='flex justify-center gap-5 mt-2 text-primary text-gray mb-4 text-md font-smalltext '>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='../aboutus'>Evangelism</Link></li>
                        <li><Link href='../events'>About Us</Link></li>
                    </ul>
                    {/* div for copyright */}
                </div>
                <div className='bg-white text-black font-semibold p-1 w-screen text-center sm:text-sm text-xs '>
                        <p>&copy; Resurrection Church of Calgary, All rights reserved. </p>
                </div>
            </div>
        );
    
}

export default Footer;
