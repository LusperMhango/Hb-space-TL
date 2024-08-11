import React from "react";
import logo from './HBspace.jpg';

const NavBar =()=>{
    return(
        <nav className="flex justify-between items-center p-2 md:p-1 bg-gray-200 text-white relative rounded-lg">
            <div className="flex items-center">
                <div className="text-white font-bold mr-2 ml-5"> 
                    <img src={logo} alt="Logo" className="w-full h-20 rounded-full" /> 
                </div>
                <span className="text-xl md:text-3xl font-bold text-black">HB SPACE TL</span>
            </div> 
        </nav>
    );
}
export default NavBar;