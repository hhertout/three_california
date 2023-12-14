import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { useLocationHash } from '../../router/hooks.tsx';
import { ROUTES } from '../../App.tsx';

type Props = {
  position: [number, number, number];
};

const Car = ({ position }: Props) => {
  const location = useLocationHash();
  const carRef = useRef<Mesh>(null!)
  // @ts-ignore
  const { scroll } = useScroll();
  useFrame(() => {
    if(location === ROUTES.CAR_OVERVIEW) {
      carRef.current.rotation.y = Math.PI * scroll.current;
    } else {
      carRef.current.rotation.y = 0;
    }
  })
  return (
    <mesh ref={carRef} position={[position[0], position[1] + 0.1, position[2]]}>
      <boxGeometry args={[0.3, 0.2, 0.6]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Car;
