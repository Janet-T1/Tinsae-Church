import React from "react";
import Image from "next/image";

const Card = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <a href={linkUrl}  className="block overflow-hidden hover:-translate-y-1 transition-transform hover:shadow-xl mb-50 mt-50">
      <div className="border-6 hover:cursor-pointer rounded-none relative">
        <Image
          className="w-96 h-80 object-cover"
          src={imageUrl}
          alt="Friends hanging out"
        />
        <div className="absolute -translate-y-20 font-smalltext text-white font-bold pl-3">
          <h2 className="sm:text-sm md:text-lg lg:text-2xl text-lg">{title}</h2>
          <h3 className="sm:text-sm">{description}</h3>
        </div>
      </div>
    </a>
  );
};

export default Card;


