import Effects from './components/Effects.tsx';
import { StatsGl } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import RouterRenderer from '../router/RouterRenderer.tsx';
import { useDevContext } from '../context/DevContext.tsx';
import Loader from '@scene/components/Loader.tsx';

const SceneApp = () => {
  const { toggleEffect } = useDevContext();

  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 75 }}
      gl={{ alpha: true, antialias: false }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<Loader />}>
        <RouterRenderer type={'scene'} />

        {toggleEffect && <Effects />}

        {/* ==== Dev stuff ==== */}
        {/*<OrbitControls />*/}
        {import.meta.env.VITE_APP_ENV === 'dev' ? <StatsGl /> : null}
      </Suspense>
    </Canvas>
  );
};

export default SceneApp;
