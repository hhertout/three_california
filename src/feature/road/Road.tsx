import React, { useRef } from 'react';
import { Mesh } from 'three';

type Props = {
  size: [number, number];
  position: [number, number, number];
};

const Road = ({ size, position }: Props) => {
  const RoadRef = useRef<Mesh>(null);
  return (
    <mesh
      ref={RoadRef}
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow={true}
    >
      <planeGeometry args={size} />
      <meshStandardMaterial
        color={'black'}
        displacementScale={0.2}
        roughness={1}
        metalness={0.2}
      />
    </mesh>
  );
};

export default Road;
