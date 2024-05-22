import React from 'react';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three";
import { Exo_2 } from 'next/font/google';


export function Earth(props) {

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
        '8k_earth_daymap.jpg',
        '8k_earth_normal_map.jpg',
        '8k_earth_specular_map.jpg',
        '8k_earth_clouds.jpg'
    ])


    return (
        <>
            <ambientLight intensity={3} />
            <mesh>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh >
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} />
                <OrbitControls
                    enableZoom={true}
                    enablePen={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                />
            </mesh>
        </>
    )
}