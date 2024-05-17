'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false); // Set initial state to false
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    
    
    const handleNav = () => {
        setNav(! nav)
    }
    
    useEffect(()=> {
        const changeColor = () => {
            if (window.scrollY >= 70){
                setColor('#ffffff')
                setTextColor('#000000')
            }else{
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }

        window.addEventListener('scroll', changeColor)
    }, []); 

    return (
        <div style={{backgroundColor: `${color}`}} className=" top-0 left-0 fixed  w-[100%] z-10 ease-in duration-200 ">
            {/* Logo */}
            <div className="m-auto p-5 flex justify-between items-center text-white font-smalltext text-lg ">
                <div className="font-bold">
                    <Link href="/">
                        <h1 style={{color:`${textColor}`}}>Logo</h1>
                    </Link>    
                </div>


                {/* Navigation Links */}
                <ul style={{color:`${textColor}`}} className="hidden sm:flex font-bold">
                    <li><Link href="/" className='hover:underline p-5'>Home</Link></li>
                    <li><Link href="../aboutus" className='hover:underline p-5'>About Us</Link></li>
                    <li><Link href="../events" className='hover:underline p-5'>Evangelism</Link></li>
                    <li><Link href="#" className='hover:underline p-5'>Registration Form</Link></li>
                </ul>

                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{color:`${textColor}`}}/> : <AiOutlineMenu size={20} style={{color:`${textColor}`}}/> }
                </div>

                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul className="flex-col gap-10">
                        <li className='p-4 text-4xl hover:underline'><Link href="/">Home</Link></li>
                        <li className='p-4 text-4xl hover:underline'><Link href="../aboutus" >About Us</Link></li>
                        <li className='p-4 text-4xl hover:underline'><Link href="../events">Events</Link></li>
                        <li className='p-4 text-4xl hover:underline'><Link href="#" >Membership Form</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




