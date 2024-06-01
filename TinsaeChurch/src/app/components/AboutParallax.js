import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center bg-[#3589b9] mb-10">
      <motion.div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/aboutUs/crossroads.jpg)',
          backgroundPosition: "top", 
          backgroundSize: "cover",
          y: backgroundY1
        }}
      />

      <motion.h1 style={{ y: textY }} className="text-white text-5xl relative z-10 font-semibold uppercase w-2/3 bg-black bg-opacity-50 p-4 text-center">
        A Place Where Sinners Have Found a Home.
      </motion.h1>

      <motion.div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/aboutUs/crossroads-subtract.png)',
          backgroundPosition: "top",
          backgroundSize: "cover",
          y: backgroundY2
        }}
      />
    </div>
  );
};

export default AboutParallax;

