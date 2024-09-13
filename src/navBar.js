import React from "react";
import logo from './HBspace.jpg';
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="w-full justify-between items-center p-2 md:p-1 bg-blue-500 shadow-lg text-white top-0 h-28">
            <div className="flex items-center w-full">
                <div className="text-white font-bold mr-2 ml-5"> 
                    <img src={logo} alt="Logo" className="w-full h-20 rounded-full mt-2" /> 
                </div>
                <span className="text-xl md:text-2xl font-bold text-gray-700">HB SPACE TL</span>
                <Link to="/events" className="ml-auto mr-5">
                <FaTimes className="text-red-500 w-6 h-6 md:w-8 md:h-8 hover:bg-gray-800" />
                </Link>
            </div> 
        </nav>
    );
}

export default NavBar;
