import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import fragmentShaders from '../sun/fragmentSharders.ts';
import vertexShaders from '../sun/vertexSharder.ts';

type Props = {
  position: [number, number, number];
  size: [number, number];
};
const Sun = ({ position, size }: Props) => {
  const sunRef = useRef<Mesh>(null);
  const uniforms = {
    uSize: { value: size[0] },
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#F6BA3E') },
  };

  useFrame(({ clock }) => {
    const material = sunRef?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <>
      <pointLight
        color={'#ff7300'}
        position={[0, 4, -30]}
        intensity={500}
        castShadow
      />
      <mesh position={position} ref={sunRef}>
        <circleGeometry args={[...size]} />
        <shaderMaterial
          depthWrite={false}
          blending={THREE.NormalBlending}
          uniforms={uniforms}
          fragmentShader={fragmentShaders}
          vertexShader={vertexShaders}
        />
      </mesh>
    </>
  );
};

export default Sun;
