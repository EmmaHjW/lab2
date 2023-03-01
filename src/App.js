import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import { PortfolioComponent } from './components/Portfolio';
import { KontaktComponent } from './components/Kontakt';
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { SecondEasterEgg } from './components/SecondEasterEgg';

export default function App() {
  
  

  return (
   
    
    <HashRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
        <Route path="/portfolio" element={<PortfolioComponent/>} />
        <Route path="/kontakt" element={<KontaktComponent/>} />
      </Routes>
      <SecondEasterEgg />
  </HashRouter>
 
  )
  }
