import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = (): JSX.Element => {
  const { progress } = useProgress();
  return (
    <>
      <color attach={'background'} />
      <Html center color={'#F1F1F1'}>
        Loading : {progress} %
      </Html>
    </>
  );
};

export default Loader;
