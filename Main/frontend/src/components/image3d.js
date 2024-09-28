// src/components/Your3DImageComponent.js
import React from 'react';
import { Canvas } from '@react-three/fiber';


const Your3DImageComponent = () => {
return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      {/* Add your 3D model here */}
      {/* Example: A simple rotating cube */}
        <mesh rotation={[1, 1, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
        </mesh>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
    </Canvas>
);
};

export default Your3DImageComponent;
