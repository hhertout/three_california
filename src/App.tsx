import { Canvas } from '@react-three/fiber';
import { StatsGl } from '@react-three/drei';
import DevBar from '@components/DevBar.tsx';
import React from 'react';
import { useDevContext } from './context/DevContext.tsx';
import Effects from '@components/Effects.tsx';
import RouterProvider from './router/RouterProvider.tsx';
import { Route } from './router/router.d';
import Scene from '@components/Scene.tsx';

export enum ROUTES {
  HOME = '/',
  CAR_OVERVIEW = '/car-overview',
}

const routes: Array<Route> = [
  {
    path: ROUTES.HOME,
    effect: () => {
      console.log('home');
    },
  },
  {
    path: ROUTES.CAR_OVERVIEW,
    effect: () => {
      console.log('car overview');
    },
  },
];

function App() {
  const { toggleEffect } = useDevContext();
  return (
    <RouterProvider routes={routes}>
      <div id='canvas-container'>
        <h1 className={'main-title'}>Welcome to California</h1>
        <DevBar />
        <Canvas
          camera={{ position: [0, 0, 0], fov: 75 }}
          gl={{ alpha: true, antialias: false }}
          dpr={[1, 2]}
        >

          <Scene />

          <StatsGl />
          {/*<OrbitControls />*/}

          {toggleEffect && <Effects />}
        </Canvas>
      </div>
    </RouterProvider>
  );
}

export default App;


