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
                <div className='w-screen py-5 bg-teritary flex flex-col '>
                    {/* div parent for icons and page lists */}
                    <ul className='flex text-primary justify-center gap-3 text-2xl '>
                    
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaTiktok/></li>
                        <li><FaYoutube/></li>
                    </ul>
                    <ul className='flex justify-center gap-5 mt-2 text-primary mb-4 text-lg font-smalltext '>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='../aboutus'>Events</Link></li>
                        <li><Link href='../events'>About Us</Link></li>
                    </ul>
                    {/* div for copyright */}
                    <div className='bg-primary text-secondary p-1 w-screen text-center sm:text-sm text-xs '>
                        <p>&copy; Timothy Generation, All rights reserved. </p>
                    </div>
                </div>
            </div>
        );
    
}

export default Footer;
