import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; 
import Image from "next/image";

const AboutParallax = () => {
  
  const ref = useRef(null); 
    const { scrollYProgress } = useScroll({
        target: ref, 
        offset: ["start start", "end start"], 
    });

  return (
    <div>
      
    </div>
  );
};

export default AboutParallax;