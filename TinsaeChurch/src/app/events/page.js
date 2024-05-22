'use client'

import styled from "styled-components"
import {Canvas} from "@react-three/fiber"
import {Suspense} from "react"
import { Earth } from "../components/Earth"
const CanvasContainer=styled.div `
  width: 100%;
  height:100%; 
  `;



export default function Page() {
    return (
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Earth/>
          </Suspense>
        </Canvas>
      </CanvasContainer>
        
    )
  }