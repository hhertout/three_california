import React, { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Mesh, Points } from 'three';

type Props = {
  count: number;
  pointSize: [number, number, number];
  sphereArgs: [number, number, number];
};

const AboutMeBanner = ({ count, pointSize, sphereArgs }: Props) => {
  const ref = useRef<Mesh>(null);
  const pointsRef = useRef<Points>(null);

  const particlesPosition = useMemo(() => {
    const position = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = Math.random() * pointSize[0];
      let y = Math.random() * pointSize[1];
      const z = Math.random() * pointSize[2];
      position.set([x, y, z], i * 3);
    }

    return position;
  }, [count, pointSize]);

  useEffect(() => {
    const points = pointsRef.current!;
    points.geometry.translate(
      -pointSize[0] / 2,
      -pointSize[1] / 2,
      -pointSize[2] / 2
    );
  }, []);

  useFrame(({ clock }) => {
    const sphere = ref.current!;
    const points = pointsRef.current!;
    sphere.rotation.y = clock.elapsedTime * 0.1;
    points.rotation.y = clock.elapsedTime * 0.13;
  });

  const uniforms = useMemo(() => {
    return {
      uColor: { value: new Color('#000') },
    };
  }, []);

  return (
    <>
      <mesh ref={ref} position={[0.4, 0, 3.9]}>
        <sphereGeometry args={sphereArgs} />
        <meshBasicMaterial wireframe />
      </mesh>
      <points ref={pointsRef} position={[0.4, 0, 3.9]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          uniforms={uniforms}
          fragmentShader={fragmentShaders}
          vertexShader={vertexShaders}
          depthWrite={false}
        />
      </points>
    </>
  );
};

export default AboutMeBanner;

const fragmentShaders = `
uniform vec3 uColor;

varying vec2 vUv;

void main() {
vec3 color = uColor;
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 3.0);

  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}

`;

const vertexShaders = `
varying vec2 vUv;

void main() {
  gl_PointSize += 5.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}

`;
