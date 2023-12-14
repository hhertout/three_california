import Car from '../features/car/Car.tsx';
import Road from '../features/road/Road.tsx';
import Terrain from '../features/terrain/Terrain.tsx';
import Sun from '../features/sun/Sun.tsx';
import Buildings from '../features/buildings/Buildings.tsx';
import ShootingStars from '../features/shootingStars/ShootingStars.tsx';
import CameraRig from '@components/CameraRig.tsx';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { ScrollControls } from '@react-three/drei';
import React from 'react';

const terrainDepth = 60;

const Home = () => {
  useFrame((state, delta) => {
    state.viewport.width = 21;
    easing.damp3(
      state.camera.position,
      [
        (state.pointer.x * state.viewport.width) / 24,
        2 + (state.pointer.y * state.viewport.width) / 24,
        15,
      ],
      0.5,
      delta
    );
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <ScrollControls infinite>
        <Car position={[0.5, 0, 12]} />
      </ScrollControls>
      <Road position={[-0.05, 0.02, 0]} size={[1.9, terrainDepth]} />
      <Terrain position={[0, 0, 0]} size={[160, terrainDepth]} />
      <Sun position={[0, 5, -40]} size={[22, 80]} />
      <Buildings size={250} maxHeight={2} width={80} z={-26} />
      <Buildings size={120} maxHeight={6} width={80} z={-30} />
      <ShootingStars
        count={200}
        size={[340, 60, 10]}
        position={[-170, 5, -80]}
        cameraPosition={[0, 0, 0]}
        color={'#F6BA3E'}
      />
      <CameraRig />
    </>
  );
};

export default Home;
