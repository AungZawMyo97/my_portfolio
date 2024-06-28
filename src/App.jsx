
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navigation from './Sections/Navigation';
import Header from './Sections/Header';
import Footer from './Sections/Footer';

import Home from './Sections/Home'; // Import Home component
import About from './Sections/About'; // Import About component
import Contact from './Sections/Contact'; // Import Contact component

function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <Navigation />
      <Header />
      <Routes> {/* Define your routes here */}
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
