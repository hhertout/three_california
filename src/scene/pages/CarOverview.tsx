import React, { useRef } from 'react';
import OrganicPlane from '../../features/organicPlane/OrganicPlane.tsx';
import { ScrollControls } from '@react-three/drei';
import Car from '../../features/car/Car.tsx';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { PointLight } from 'three';

const CarOverview = () => {
  const lightRef = useRef<PointLight>(null);
  useFrame((state) => {
    state.viewport.width = 21;
    easing.damp3(state.camera.position, [0, 0.6, 11], 0.8);
    easing.dampLookAt(state.camera, [0.5, 0.3, 12], 0.2);

    if (lightRef.current) {
      lightRef.current.intensity = easing.linear(10);
    }
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <ScrollControls infinite>
        <Car position={[0.5, 0, 12]} />
      </ScrollControls>
      <pointLight ref={lightRef} position={[0, 1, 10]} intensity={0} />
      <OrganicPlane position={[0, -0.5, 18]} height={18} width={18} />
    </>
  );
};

export default CarOverview;
