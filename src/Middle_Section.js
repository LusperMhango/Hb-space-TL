import React from "react";

const Middle_part = () => {
    return (
        <div className="flex justify-center bg-gray-200">
            <div className="text-center p-5">
                <button className="text-sm mb-6 mt-20 px-2 py-1.5 border  text-gray-500 bg-white rounded-full font-bold font-serif">
                    MEET YOUR BIGGEST EXPECTATIONS
                </button>
                <h2 className="text-7xl font-serif mt-1 mb-6 font-bold">
                    CONNECT WITH <br /> HB SPACE TL
                </h2>
                <p className="text-2xl mb-8 font-serif">
                    HBspace TL is a collaborative space where tech enthusiasts<br />come
                    together to build, experiment and improve.
                </p>

                <div className="flex justify-center items-center gap-8 mt-14">
                    <button className="px-5 py-2 border-2  hover:bg-blue-600 border-transparent bg-red-600 text-white rounded-lg font-bold cursor-pointer">
                        BECOME A MEMBER
                    </button>
                    <button className="px-5 py-2 border-2 w-48 hover:bg-blue-600 border-transparent bg-white text-gray-900 rounded-lg font-bold cursor-pointer">
                        EXPLORE
                    </button>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Middle_part;
