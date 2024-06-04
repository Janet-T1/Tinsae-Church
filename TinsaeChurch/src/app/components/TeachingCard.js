import React from "react";
import Image from "next/image";

const TeachingCard = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <div className="w-3/4 mx-auto overflow-hidden hover:-translate-y-1 transition-transform hover:shadow-xl mb-12 mt-12">
      <div className="border-6 hover:cursor-pointer rounded-none relative h-96"> {/* Set fixed height */}
        <Image
          className="w-full h-full object-cover"
          src={imageUrl}
          alt="Card Image"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 p-4 flex flex-col justify-between">
          
          <div className="text-left ml-10 mt-16">
            <h2 className="text-4xl text-white font-bold mb-2">{title}</h2>
            <h3 className="text-xl text-white mb-4">{description}</h3>
          </div>
       
          <a
            href={linkUrl}
            target="_blank" 
            className="inline-block w-1/4 mb-7 mr-10 ml-auto px-4 py-3 bg-red-800 text-white text-center font-semibold hover:bg-red-900 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeachingCard;








