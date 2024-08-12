import React from "react";
import member1 from "./machine.png";

const BoardMembers = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-gray-200 h-50">
      <div className="text-center">
        <h3 className="text-red-600 font-bold font-serif text-xl mt-20 mb-4">
          BOARD MEMBERS
        </h3>
        <p className="font-serif text-xl">
          Our Board of experienced young innovators determined and ready to
          render services<br /> at a reasonable cost and help you grow in your
          respective field
        </p>
      </div>
    <div className="flex flex-col items-center rounded-lg mt-5 bg-gray-200 p-5 ">
      <div className="grid grid-cols-3 gap-20">
        <div className="flex flex-col items-center">
        <a href="" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
        <img
          src={member1}
          alt="Mr. Hudson Mwangalika"
          className="h-40 border border-red-600 w-40 rounded-full shadow-lg hover:bg-blue-500 hover:border-blue-500 hover:border-2 duration-300"

        />
        <p className="font-serif text-xl mt-2 font-bold">Hudson Mwangalika</p>
      </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/lusungu-mhango-6b6053304"  className="flex flex-col items-center">
          <img src={member1} 
          alt="Mr. Lusungu Mhango" 
          className="h-40 border border-red-600 w-40 rounded-full shadow-lg hover:border-blue-500 duration-300 hover:border-2"
          />
          <p className="font-serif text-xl mt-2 font-bold">Lusungu Mhango</p>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img src={member1} alt="Mr. Yobe Skelo" className="h-40 w-40 border border-red-600 rounded-full shadow-lg hover:border-blue-500 duration-300 hover:border-2" />
          <p className="font-serif text-xl mt-2 font-bold">Yobe Skelo</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={member1} alt="Mr. Blessings Chidothi" className="h-40 w-40 border border-red-600 rounded-full shadow-lg  hover:border-blue-500 duration-300 hover:border-2" />
          <p className="font-serif text-xl mt-2 mb-20 font-bold">Blessings Chidothi</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={member1} alt="Mr. Other Member 1" className="h-40 w-40 border border-red-600 rounded-full shadow-lg  hover:border-blue-500 duration-300 hover:border-2" />
          <p className="font-serif text-xl mt-2 mb-20 font-bold">Mariana Pachanya</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={member1} alt="Mr. Other Member 2" className="h-40 w-40 border border-red-600 rounded-full shadow-lg  hover:border-blue-500 duration-300 hover:border-2" />
          <p className="font-serif text-xl mt-2 mb-20 font-bold">Chancy Mhango</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BoardMembers;
