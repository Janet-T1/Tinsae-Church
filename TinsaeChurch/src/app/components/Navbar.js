'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaCaretDown, FaCross} from 'react-icons/fa';


// resize-none
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [showMinistriesDropdown, setShowMinistriesDropdown] = useState(false);
    const [showFormsDropdown, setShowFormsDropdown] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const toggleMinistriesDropdown = () => {
        setShowMinistriesDropdown(!showMinistriesDropdown);
    };

    const toggleFormsDropdown = () => {
        setShowFormsDropdown(!showFormsDropdown);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 70) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };

        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div style={{ backgroundColor: `${color}` }} className="top-0 left-0 fixed w-full z-50 ease-in duration-200">
            {/* Logo */}
            <div className="m-auto p-5 pt-0 pb-0  flex justify-between items-center text-white font-smalltext text-lg">
                <div className="font-bold">
                    <Link href="/">
                        <div className="flex items-center">
                            <FaCross style={{ color: `${textColor}`, fontSize: '24px' }} />
                            <span style = {{color: `${textColor}`}} className="ml-2">TINSAEYOUTH</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul style={{ color: `${textColor}` }} className="hidden sm:flex items-center font-bold space-x-5">
                    <li><Link href="https://www.facebook.com/profile.php?id=100093639531988" className='hover:underline p-5'>Watch Live</Link></li>
                    <li><Link href="../aboutus" className='hover:underline p-5'>About Us</Link></li>
                    <li className='relative group p-5'>
                        <button onClick={toggleMinistriesDropdown} className='flex items-center hover:underline'>
                            Ministries
                            <FaCaretDown className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                        </button>
                        {showMinistriesDropdown && (
                            <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg  w-40">
                                <li onClick={toggleMinistriesDropdown} className='p-2 hover:bg-gray-200'><Link href="../evangelism">Evangelism</Link></li>
                                <li onClick={toggleMinistriesDropdown} className='p-2 hover:bg-gray-200'><Link href="../teaching">Teaching</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='relative group p-5'>
                        <button onClick={toggleFormsDropdown} className='flex items-center hover:underline'>
                            Forms
                            <FaCaretDown className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                        </button>
                        {showFormsDropdown && (
                            <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg w-40">
                                <li onClick={toggleFormsDropdown} className='p-2 hover:bg-gray-200'><Link href="../membership">Membership</Link></li>
                                <li onClick={toggleFormsDropdown} className='p-2 hover:bg-gray-200'><Link href="../getInvolved">Get Involved</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>

                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                </div>

                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul className="flex-col gap-10">
                        <li onClick={handleNav} className='p-4 text-4xl hover:underline'><Link href="/">Home</Link></li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:underline'><Link href="../aboutus" >About Us</Link></li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:underline'><Link href="../evangelism">Evangelism</Link></li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:underline'><Link href="../membership" >Membership Form</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

