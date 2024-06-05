'use client'
import styled from "styled-components"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Earth } from "../components/Earth"
import EarthHero  from "../components/EarthHero"
import EvanCard from "../components/EvanCard"
import Slider from "../components/Slider"
import { SliderData } from "../components/SliderData"
import React, { useEffect } from 'react';
import Lenis from 'lenis';


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%; 
`;

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <div >
        <EarthHero />
        <EvanCard />
        <Slider  slides={SliderData} />
      </div>

    </>
  );
}
