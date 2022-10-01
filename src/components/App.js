import React from 'react';
import "../StyleInScss/app.css";
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import FcNavbar from './FcNavbar';
import Main from './Main';
import Sura from './Sura';
import Hadis from './Hadis';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
function App() {
  return (
    <>
  
    <BrowserRouter>
    <FcNavbar/>
    <Routes>
         <Route  path="/" element={<Home/>}  />
        <Route  path="/sura" element={<Sura/>} />
        <Route  path="/main" element={<Main/>}  />
        <Route  path="/hadis" element={<Hadis/>} />
        <Route  path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>

    
        </>


  )
}

export default App