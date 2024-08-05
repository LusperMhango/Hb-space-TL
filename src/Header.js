import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './HBspace.jpg';

const Header = () => {
    // State to manage the menu open/close status
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-2 md:p-4 bg-gray-800 text-white relative">
            <div className="flex items-center">
                <div className="text-white font-bold mr-2"> 
                    <img src={logo} alt="Logo" className="w-full h-20 rounded-full" /> 
                </div>
                <span className="text-xl md:text-3xl font-bold text-black">HB SPACE TL</span>
            </div>
            <div className={`ml-40 absolute top-14 right-0  md:static md:flex-grow md:flex items-center ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:gap-8 gap-4`}>
                <a href="#about" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-bold">About</a>
                <a href="#services" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-bold">Services</a>
                <a href="#events" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-bold">Events</a>
                <a href="#donate" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-bold">Donate</a>
                <a href="#projects" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-bold">Projects</a>
                <a href="#login" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-bold">Log in</a>
                <a href="#signup" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-bold">Sign up</a>
            </div>
            <div className="md:hidden flex items-center cursor-pointer absolute top-2 right-2" onClick={toggleMenu}>
                <FaBars size="24" />
            </div>
        </header>
    );
};

export default Header;
