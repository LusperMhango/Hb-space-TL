import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage';
import Signup from './SignIn'; 
import Account from './AccountRegister';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/register" element={<Account/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
