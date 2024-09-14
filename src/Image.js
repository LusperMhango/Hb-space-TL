import React, { useState } from 'react';
import image1 from './HbProject.jpg';

const HBphoto = () => {
  const imageUrls = [image1];

  return (
    <div className="text-center bg-gray-200 "> 
      <ImageOverlay images={imageUrls} />
    </div>
  );
};
 
const ImageOverlay = ({ images }) => {
  const [currentIndex] = useState(0);

  return (
    <div className="relative flex justify-center items-center bg-cover bg-center h-96 bg-gray-200 pt-8">
      <div className="relative w-full max-w-2xl h-full mx-auto"> 
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            className={`block mx-auto rounded-lg h-full object-cover transition-opacity duration-500 ${
              currentIndex === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            src={images[0]}
            alt="Modern Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HBphoto;
