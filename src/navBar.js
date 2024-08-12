import React from "react";
import logo from './HBspace.jpg';
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="w-full justify-between items-center p-2 md:p-1 bg-gray-100 text-white mt-1 top-0">
            <div className="flex items-center w-full">
                <div className="text-white font-bold mr-2 ml-5"> 
                    <img src={logo} alt="Logo" className="w-full h-14 rounded-full" /> 
                </div>
                <span className="text-xl md:text-3xl font-bold text-black">HB SPACE TL</span>
                <FaTimes color="black" className="ml-auto mr-5 w-6 h-6 md:w-8 md:h-8"/>
            </div> 
        </nav>
    );
}

export default NavBar;
