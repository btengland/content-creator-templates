import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace/Marketplace';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Marketplace />
    </div>
  );
}

export default App;
