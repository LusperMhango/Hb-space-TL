import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>Zomba city, Malawi.</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhoneAlt className="mr-2" />
          <span>+265***</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2" />
          <span>HB space Tl@gmail.com</span>
        </div>
      </div>

      <div className="text-center mt-4">
        <h3 className="mb-2">Follow us:</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaWhatsapp size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
