import React from "react";

const HB_text = () => {
  return (
    <div className="relative flex justify-center items-center bg-cover bg-center bg-gray-500 p-5">
      <div className="text-center p-5 max-w-5xl mx-auto">
        <h1 className="font-bold text-red-800 text-3xl md:text-4xl mb-8 mt-5 font-serif shadow-lg">
          WELCOME TO HB SPACE TL
          <hr />
        </h1>
        <p className="font-serif text-black text-lg md:text-xl">
          As Hb Space TL, we believe in the power of togetherness, collaboration,
          <br className="hidden md:block" />
          and actively pursuing knowledge. Together, we can make
          <br className="hidden md:block" />
          a heavy impact.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
          <div className="block bg-gray-200 p-5 bg-gray-900 rounded-lg shadow-lg text-center font-serif transition-transform duration-300 hover:-translate-x-2 w-full md:w-80 h-60">
            <h2 className="text-2xl text-blue-800 font-bold mb-2">Access</h2>
            <p className="text-gray-500">
              24/7 access to our training ground equipment and interaction with specialists. Book special meetings and services you want HB Space to do for you.
            </p>
          </div>
          <div className="block bg-gray-200 p-5 bg-gray-900 rounded-lg shadow-lg text-center font-serif transition-transform duration-300 hover:-translate-x-2 w-full md:w-80 h-60">
            <h2 className="text-2xl text-blue-800 font-bold mb-2">Gain</h2>
            <p className="text-gray-500">
               soft skills and gradually amplify to the next level. Become a Guru with HB Space TL.
            </p>
          </div>
          <div className="block bg-gray-200 p-5 bg-gray-900 rounded-lg shadow-lg text-center font-serif transition-transform duration-300 hover:-translate-x-2 w-full md:w-80 h-60">
            <h2 className="text-2xl text-blue-800 font-bold mb-2">Goal</h2>
            <p className="text-gray-500">
             is to be a leading force in the integration of advanced technology. We strive to deliver innovative solutions that enhance security, efficiency, and growth across diverse sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HB_text;
