import React from "react";

const Middle_part = () => {
    return (
        <div className="flex justify-center bg-gray-200"> 
            <div className="text-center p-5">
                <button className="text-sm mb-6 mt-8 px-2 py-1.5 border text-gray-500 bg-white rounded-full font-bold font-serif">
                    MEET YOUR BIGGEST EXPECTATIONS
                </button>
                <h2 className="text-4xl font-serif mt-1 mb-6 font-bold">
                    THE EASY PLACE TO CONNECT WITH <br/> HB SPACE TL
                </h2>
                <p className="text-2xl mb-8 font-serif">
                   Hb Space Tl is a collaborative space centered on <br/>empowering tomorrow with cutting-edge tech..
                </p>

                <div className="flex justify-center items-center gap-8 mt-14 mb-8">
                    <button className="px-5 py-2 border-2  hover:bg-blue-600 bg-red-600 text-white rounded-lg font-bold cursor-pointer">
                        BECOME A MEMBER
                    </button>
                    <button className="px-5 py-2 border-2 w-48 hover:bg-blue-600 bg-white text-gray-900 rounded-lg font-bold cursor-pointer">
                        EXPLORE
                    </button>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Middle_part;
