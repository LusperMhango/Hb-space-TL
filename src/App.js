import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage';
import Signup from './Signup'; // Assuming you have a Signup component


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup/>} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
