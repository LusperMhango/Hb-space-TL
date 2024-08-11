import React, { useState } from 'react';
import image1 from './modern.png';
import image2 from './machine.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HBphoto = () => {
  const imageUrls = [image1, image2];

  return (
    <div className="text-center bg-gray-200">
      <ImageOverlay images={imageUrls} />
    </div>
  );
};

const ImageOverlay = ({ images }) => {
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
    <div className="relative w-80 h-80 mx-auto">
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out mt-10">
        <img
          className={`block mx-auto rounded-lg w-full h-full object-cover ${
            currentIndex === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          src={images[0]}
          alt="Modern Image"
        />
      </div>
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out mt-5">
        <img
          className={`block mx-auto rounded-lg w-full h-full object-cover ${
            currentIndex === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          src={images[1]}
          alt="Machine Image"
        />
      </div>
      <button
        className="text-red-600 border border-blue-800 p-2 cursor-pointer absolute bottom-0 transform -translate-y-1/2 left-4 hover:bg-blue-500 rounded-lg"
        onClick={prevImage}
      >
        <FaArrowLeft />
      </button>
      <button
        className="text-red-600 border border-blue-800 p-2 cursor-pointer absolute bottom-0 transform -translate-y-1/2 right-4 hover:bg-blue-500 rounded-lg"
        onClick={nextImage}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HBphoto;
