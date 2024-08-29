import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

import logo from './octopuslogo2.jpg';

<img src={logo} alt="Logo" className="logo" />

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
