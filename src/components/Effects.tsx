import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React from 'react';

function Effects() {
  const location = window.location
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.3}
        intensity={0.6}
        mipmapBlur={location.pathname === '/' || location.pathname === '/home'}
      />
    </EffectComposer>
  );
}

export default Effects;