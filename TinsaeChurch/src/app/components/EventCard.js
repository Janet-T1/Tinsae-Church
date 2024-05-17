import React from "react";
import Image from "next/image";

const Card = ({ title, description, imageUrl, }) => {
  return (
    // the div that wraps the entire component
    <div className="overflow-hidden rounded-md hover:-translate-y-1 transition-transform hover:rounded-md hover:shadow-xl">
      {/* parent div for the card*/}
      <div className=" border-solid border-2 hover:cursor-pointer">
        {/* div for images inside the card */}
        <div>
          <Image
            className="w-96 h-80 object-cover"
            src={imageUrl}
            alt="Friends hanging out"
          />
        </div>
        {/* div for text inside the card*/}
        <div className="absolute -translate-y-20 font-smalltext text-red-300 font-bold pl-3">
          <h2 className="sm:text-sm  md:text-lg lg:text-2xl text-lg ">{title}</h2>
          <h3 className="sm:text-sm">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;