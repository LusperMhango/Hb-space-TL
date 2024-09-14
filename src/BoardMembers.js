import React from "react";
import member1 from "./hudson.jpg";
import member2 from "./luh.jpg"
import member3 from "./yobe.jpg"

const BoardMembers = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-gray-200 sm:h-auto h-50">
      <div className="text-center">
        <h3 className="text-red-800 font-bold font-serif text-3xl mt-10 sm:mt-16 mb-4 shadow-lg">
          BOARD MEMBERS <hr/>
        </h3>
        <p className="font-serif text-lg sm:text-xl mb-4">
          Our Board of experienced young innovators determined and ready to
          render services<br className="hidden sm:block" /> at a reasonable cost and help you grow in your
          respective field
        </p>
      </div>
      <div className="flex flex-col items-center rounded-lg mt-5 bg-gray-200 p-5 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20">
          <div className="flex flex-col items-center">
            <a href="" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img
                src={member1}
                alt="Mr. Hudson Mwangalika"
                className="h-32 border border-red-600 w-32 rounded-full shadow-lg hover:bg-blue-500 hover:border-blue-500 hover:border-2 duration-300"
              />
              <p className="font-serif text-lg sm:text-xl mt-2 font-bold">CEO<br/>Hudson Mwangalika</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/lusungu-mhango-6b6053304" className="flex flex-col items-center">
              <img 
                src={member2} 
                alt="Mr. Lusungu Mhango" 
                className="h-32 border border-red-600 w-32 rounded-full shadow-lg hover:border-blue-500 duration-300 hover:border-2"
              />
              <p className="font-serif text-lg sm:text-xl mt-2 font-bold">CPO<br/>Lusungu Mhango</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={member3} 
              alt="Mr. Yobe Skelo" 
              className="h-32 w-32 border border-red-600 rounded-full shadow-lg hover:border-blue-500 duration-300 hover:border-2" 
            />
            <p className="font-serif text-lg sm:text-xl mt-2 font-bold">IOT<br/>Yobe Skelo</p>
          </div>
          <button className="flex flex-col pl-16 font-serif text-2xl text-blue-700 hover:text-red-600">
              <h1>see more</h1>
          </button>
          </div>
        </div>
      </div>
  );
};

export default BoardMembers;
