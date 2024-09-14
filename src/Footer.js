import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 p-4 text-xl font-serif">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center mb-3">
          <FaMapMarkerAlt size={40} className="mr-2 text-red-500" />
          <span>Zomba city, Malawi.</span>
        </div>
        <div className="flex items-center mb-3">
    <FaPhoneAlt className="mr-2" />
    <a href="tel:+265999916443" className="text-blue-500 hover:underline">+265 999916443</a>
    </div>
        <div className="flex items-center mb-3">
          <FaEnvelope size={32} className="mr-2" />
          <a href="mailto:hbspacelt@gmail.com">hbspacelt@gmail.com</a>
        </div>
      </div>

      <div className="text-center mt-4">
        <h3 className="mb-2 text-2xl font-bold text-red-500">Follow us:</h3>
        <div className="flex justify-center space-x-16 mb-8 text-blue-500">
          <a href="https://www.facebook.com/HB space LT" className="hover:text-gray-400">
            <FaFacebook size={32} />
          </a>
          <a href="https://youtu.be/sKjV2WWduzo?si=meVPiIU5KaGgUzJs" className="hover:text-gray-400">
            <FaYoutube size={32} />
          </a>
          <a href="https://wa.me/265999916443?text=Hello%20HB%20Space%20TL!"
             target="_blank"
             rel="noopener noreferrer" className="hover:text-gray-400">
            <FaWhatsapp size={32} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
