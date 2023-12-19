import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React from 'react';

function Effects() {
  return (
    <EffectComposer>
      {/*<SMAA />*/}
      <Bloom
        luminanceThreshold={0.4}
        intensity={0.6}
        kernelSize={0.3}
        mipmapBlur={true}
      />
    </EffectComposer>
  );
}

export default Effects;
