import React, { useState } from 'react';
import image1 from './modern.png';
import image2 from './machine.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const HBphoto = () => {
    const imageUrls = [image1, image2,];
  
    return (
      <div className="text-center">
        <ImageCarousel images={imageUrls} />
      </div>
    );
  };

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-center relative w-full mx-auto overflow-hidden bg-pink-100 ">
      <button 
        className="text-red-600 border-none p-2 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-4 hover:bg-blue-500 rounded-lg"
        onClick={prevImage}
      >
        <FaArrowLeft/>
      </button>
      <img 
        className="max-w-full h-auto block mx-auto" 
        src={images[currentIndex]} 
        alt={`Image ${currentIndex + 1}`} 
      />
      <button 
        className=" text-red-600 border-none p-2 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-4 hover:bg-blue-500 rounded-lg"
        onClick={nextImage}
      >
        <FaArrowRight/>
      </button>
    </div>
  );
};

export default HBphoto;
