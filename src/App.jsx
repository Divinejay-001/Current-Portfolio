import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  React.useEffect(()=>{
    AOS.init({ 
      duration: 500,
      offset:100,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
},[]);
  return (
    <div className='bg-[#0F0F28] overflow-hidden select-none'>
     <Navbar/>
     <Hero/>
     <About/>
     <Service/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
