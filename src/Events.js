import React from 'react';

const Event = ({ date, title }) => (
  <div className="bg-white p-4 my-2 border rounded-md shadow-md">
    <div className="flex justify-between items-center mb-2">
      <div className="text-xs text-gray-500">{date}</div>
      <button className="bg-blue-200 text-blue-600 px-3 py-1 rounded-md" type="button">
        Register
      </button>
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
    <div className="flex space-x-2 mt-4">
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="bg-gray-100 p-4 min-h-screen">
    <div className="flex items-center justify-between bg-black p-2 text-white">
      <div className="flex items-center space-x-2">
        <button className="text-xl" type="button">&#9776;</button>
        <h1 className="text-red-400">HB Look-out</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button className="text-xl" type="button">&#128269;</button>
      </div>
    </div>

    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col items-center mb-4">
        <div className="bg-red-500 w-16 h-16"></div>
        <h2 className="text-xl font-bold">HB SPACE TL.</h2>
        <p>Zomba City, Malawi</p>
        <p>Organized by <span className="font-bold">HB Space TI</span></p>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2" type="button">About</button>
        <button className="px-4 py-2" type="button">Events</button>
        <button className="px-4 py-2" type="button">Projects</button>
      </div>

      <div className="bg-gray-200 w-full rounded-md">
        <div className="flex justify-between border-b">
          <button className="flex-1 py-2 border-r text-center" type="button">Upcoming</button>
          <button className="flex-1 py-2 text-center" type="button">Past</button>
        </div>
        <Event date="MON, JUN 17, 2024, 6:00 PM CAT" title="ARDUINO PROGRAMMING" />
        <Event date="TUE, JUN 18, 2024, 6:00 PM CAT" title="MICRO-CONTROLLERS" />
      </div>
    </div>
  </div>
);

export default EventsPage;
