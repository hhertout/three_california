import React from 'react';
import OrganicPlane from '@feature/organicPlane/OrganicPlane.tsx';
import { ScrollControls } from '@react-three/drei';
import Car from '@feature/car/Car.tsx';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const CarOverview = () => {
  useFrame((state) => {
    state.viewport.width = 21;
    easing.damp3(state.camera.position, [0, 0.6, 10], 0.5);
    state.camera.lookAt((1.5 * state.viewport.width) / 15, 0.3, 12);
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <ScrollControls infinite>
        <Car position={[0.5, 0, 12]} />
      </ScrollControls>
      <pointLight position={[0, 0, 10]} intensity={6} />
      <OrganicPlane position={[0, -0.5, 18]} height={18} width={18} />
    </>
  );
};

export default CarOverview;