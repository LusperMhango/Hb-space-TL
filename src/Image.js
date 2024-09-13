import React, { useState } from 'react';
import image1 from './HbProject.jpg';


const HBphoto = () => {
  const imageUrls = [image1];

  return (
    <div className="text-center bg-gray-500">
      <ImageOverlay images={imageUrls} />
    </div>
  );
};

const ImageOverlay = ({ images }) => {
  const [currentIndex] = useState(0);

  return (
    <div
    className='relative justify-center items-center bg-cover bg-center h-96 bg-gray-500'
    >
    <div className="relative w-96 h-full mx-auto">
      <div className="absolute h-80 w-auto ">
        <img
          className={`block mx-auto rounded-lg h-96 object-cover ${
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
