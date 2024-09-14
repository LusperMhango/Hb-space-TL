import React, { useState } from 'react';
import { FaBars, FaUserPlus } from 'react-icons/fa';
import logo from './HBspace.jpg';
import { Link } from 'react-router-dom';



const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };

    return (
        <div
        className='relative justify-center items-center bg-cover bg-center h-screen bg-gray-200'
        >
        <header className="flex justify-between items-center p-2 md:p-4 text-white relative rounded-lg bg-blue-500">
            <div className="flex items-center">
                <div className="text-white font-bold mr-2 ml-10"> 
                    <img src={logo} alt="Logo" className="w-full h-20 rounded-full" /> 
                </div>
                <span className="text-xl md:text-3xl font-bold text-black">HB SPACE TL</span>
            </div>
            <div className={`ml-40 absolute top-14 right-0 md:static md:flex-grow md:flex items-center ${isMenuOpen ? 'flex bg-white h-64 mt-10 w-full h-78' : 'hidden'} flex-col md:flex-row md:gap-8 gap-4 `}>
                <a href="#about" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-bold text-lg ">About</a>
                <a href="#services" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-bold text-lg">Services</a>
                <Link to="/events" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-bold text-lg">Events</Link>
                <a href="#donate" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-bold text-lg">Donate</a>
                <a href="#projects" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-bold text-lg">Projects</a>
              
                <Link to="/signup" className="text-gray-700 hover:text-red-600 transition-colors duration-300 "><FaUserPlus size={26} className='ml-2'/></Link>
            </div>
            <div className="md:hidden flex items-center cursor-pointer absolute top-2 right-2 mt-7" onClick={toggleMenu}>
                <FaBars size="20" color='black' />
            </div>
            
        </header>
        <div className="flex justify-center p-5">
  <div className="text-center p-5 max-w-4xl mx-auto">
    <button className="text-xs md:text-sm mb-6 mt-10 md:mt-20 px-2 py-1.5 border text-gray-500 bg-white rounded-full font-bold font-serif">
      MEET YOUR BIGGEST EXPECTATIONS
    </button>
    <h2 className="text-3xl md:text-5xl font-serif mt-5 mb-6 font-bold text-gray-900 shadow-2xl">
      THE EASY PLACE TO CONNECT WITH <br className="hidden md:block" /> HB SPACE TL
      <hr />
    </h2>
    <p className="text-lg md:text-2xl mb-8 font-serif mt-10 md:mt-20">
      HB Space TL is a collaborative space centered on <br className="hidden md:block" /> empowering tomorrow with
      <br className="hidden md:block" /> cutting-edge tech.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 mt-10 md:mt-8 mb-2">
      <Link
        to="/register"
        className="w-full md:w-auto px-5 py-2 border-2 hover:bg-blue-600 bg-red-600 text-white rounded-lg font-bold cursor-pointer mb-4 md:mb-0 mt-4 "
      >
        BECOME A MEMBER
      </Link>
    </div>
  </div>
</div>

           
           </div>
    );
    
};

export default Header;
