import { motion, useScroll, useTransform } from "framer-motion"; 
import React, { useRef } from 'react';

function ContactCard() {
    const ref = useRef(null); 
    const { scrollYProgress } = useScroll({
        target: ref, 
        offset: ["start start", "end start"], 
    });

    const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
    const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center bg-[#3589b9]">
            <motion.h1 style={{ y: textY }} className="text-white text-5xl relative z-10 font-semibold uppercase w-2/3 bg-black bg-opacity-50 p-4">
                Join us every Saturday @ City Hall from 4:00 - 6:00 pm!
            </motion.h1>

            <motion.div className="absolute inset-0 z-0" 
                style={{
                    backgroundImage: 'url(/parallax/mountains-full.jpg)', 
                    backgroundPosition: "bottom", 
                    backgroundSize: "cover", 
                    y: backgroundY1
                }}
            />
            
            <motion.div className="absolute inset-0 z-20" 
                style={{
                    backgroundImage: 'url(/parallax/mountains-3.png)', 
                    backgroundPosition: "bottom", 
                    backgroundSize: "cover", 
                    y: backgroundY3
                }}
            />
            
            <motion.div className="absolute inset-0 z-40" 
                style={{
                    backgroundImage: 'url(/parallax/mountains-4.png)', 
                    backgroundPosition: "bottom", 
                    backgroundSize: "cover", 
                    y: backgroundY4
                }}
            />
        </div>
    );
}

export default ContactCard;

