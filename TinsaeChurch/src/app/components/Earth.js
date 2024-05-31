import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    '8k_earth_daymap.jpg',
    '8k_earth_normal_map.jpg',
    '8k_earth_specular_map.jpg',
    '8k_earth_clouds.jpg',
  ]);

  const earthRef = useRef();
  const cloudsRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 3;
    cloudsRef.current.rotation.y = elapsedTime / 3;
  });

  return (

    
    <group ref={groupRef}>
        
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={35} />
      <Stars radius={200} depth={50} count={9000} saturation={2} factor={5} />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
      </mesh>
      <OrbitControls
        enableZoom={false}
        enablePan={false} 
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        args={[groupRef.current]}
      />
    </group>
  );
}
