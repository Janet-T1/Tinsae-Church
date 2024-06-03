import React, { useState } from 'react';
import Image from 'next/image';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id="gallery" className="relative w-full max-w-screen-lg mx-auto ">
            {SliderData.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === current
                                ? 'opacity-1 ease-in duration-1000'
                                : 'opacity-0 absolute inset-0 transition-opacity'
                        }
                    >
                        {index === current && (
                            <div className="relative flex justify-center items-center">
                                <FaArrowCircleLeft
                                    onClick={prevSlide}
                                    className="absolute top-1/2 transform -translate-y-1/2 left-8 text-white/70 cursor-pointer select-none z-10"
                                    size={50}
                                />
                                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                                    <Image
                                        src={slide.image}
                                        alt="/"
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="50% 40%" // Adjusted to crop a bit higher than the middle
                                    />
                                </div>
                                <FaArrowCircleRight
                                    onClick={nextSlide}
                                    className="absolute top-1/2 transform -translate-y-1/2 right-8 text-white/70 cursor-pointer select-none z-10"
                                    size={50}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;

