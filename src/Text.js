import React from "react";

const HB_text= ()=>{
    return(
        <div className="flex justify-center bg-gray-200">
            <div className="text-center p-5">
            <h1 className="font-bold text-red-600 text-2xl mb-8 mt-5 font-serif">WELCOME TO HB SPACE TL</h1>
            <p className="font-serif text-black text-xl">
               As Hb Space Tl, we believe in the power of togetherness, collaboration,
               <br />and actively pursuit of knowledge. Together, we can make<br/>
               a heavy impact.
            </p>
            <div className="flex justify-center rounded-lg mt-5 bg-gray-200">
                 <div className="block bg-gray-100  p-5 bg-white rounded-lg shadow-lg text-center font-serif transition-transform duration-300 hover:translate-x-[-20px] mx-5 w-80 h-60 "> 
                 <h2 className="pr-80 font-serif text-xl text-gray-800 font-bold">Access</h2>
                 <p className="text-gray-600"> 
                  24/7 our training ground equipments and interaction with specialties
                  Book special meetings and services you want HB space to do for you.</p>
                 </div>
                 <div className="block bg-gray-100  p-5 bg-white rounded-lg shadow-lg text-center font-serif transition-transform duration-300 hover:translate-x-[-20px] mx-5 w-80"> 
                 <h2 className="pr-80 font-serif text-xl text-gray-800 font-bold">Gain</h2>
                 <p className="text-gray-600"> 
                  Develop soft skills and gradually amplify to the next level. Become a Guru with HB space TL</p>
                 </div>
                 <div className="block bg-gray-100  p-5 bg-white rounded-lg shadow-lg text-center font-serif transition-transform duration-300 hover:translate-x-[-20px] mx-5 w-80"> 
                 <h2 className=" pr-80 font-serif text-xl text-gray-800 font-bold">Goal</h2>
                 <p className="text-gray-600"> 
                 Is to be a leading force in the intergration of advanced technology.
                 We strive to deliver innovative solutions that enhance security, efficiency 
                 and growth across diverse sectors.
                 </p>
                 </div>
                 
             </div>
             
        </div>
    </div>

    );
       
    };
export default HB_text;
