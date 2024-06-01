'use client'

import React from 'react';
import AboutParallax from "../components/AboutParallax"
import Statement from '../components/Statement';
import Leaders from '../components/Leaders';
import Gallery from '../components/Gallery';

export default function Page() {

  
return (
      <div className="min-h-screen bg-black ">
         <AboutParallax />
         <Statement />
         <Leaders />
         <Gallery />
      </div>
        
    )
  }