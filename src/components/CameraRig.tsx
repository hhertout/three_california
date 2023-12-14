import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React from 'react';

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        (state.pointer.x * state.viewport.width) / 25,
        2 + state.pointer.y / 2.5,
        15,
      ],
      0.5,
      delta,
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <></>;
}

export default CameraRig;