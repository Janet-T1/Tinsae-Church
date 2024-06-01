import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = Array.from({ length: 65 }, (_, i) => `/gallery/allImages/Youth${i + 1}.jpg`);

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (src, index) => {
        setSelectedImage(src);
        setCurrentIndex(index);
    };

    const handleCloseClick = (e) => {
        // Close the fullscreen view if the user clicks anywhere
        // except the navigation icons
        setSelectedImage(null);
    };

    const handlePrevClick = (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    const handleNextClick = (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    return (
        <div className="p-6 bg-black flex flex-col items-center">
            <div className="w-2/3">
                <h1 className="text-white text-5xl font-bold mb-8 text-left">Our Beautiful Youth</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div 
                            key={index} 
                            className="relative w-full pb-[100%] overflow-hidden group"
                            onClick={() => handleImageClick(src, index)}
                        >
                            <img 
                                src={src} 
                                alt={`Gallery Image ${index + 1}`} 
                                className="absolute inset-0 w-full h-full object-cover cursor-pointer" 
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={handleCloseClick}
                >
                    <FaArrowLeft 
                        className="absolute left-8 text-white text-3xl cursor-pointer z-50"
                        onClick={handlePrevClick}
                    />
                    <img 
                        src={selectedImage} 
                        alt="Selected" 
                        className="max-w-full max-h-full cursor-pointer"
                        onClick={handleCloseClick}
                    />
                    <FaArrowRight 
                        className="absolute right-8 text-white text-3xl cursor-pointer z-50"
                        onClick={handleNextClick}
                    />
                </div>
            )}
        </div>
    );
}

export default Gallery;






