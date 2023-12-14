import { Canvas } from '@react-three/fiber';
import { StatsGl } from '@react-three/drei';
import DevBar from '@components/DevBar.tsx';
import React from 'react';
import { useDevContext } from './context/DevContext.tsx';
import Effects from '@components/Effects.tsx';
import RouterProvider from './router/RouterProvider.tsx';
import { Route } from './router/router.d';
import Scene from '@components/Scene.tsx';
import HtmlApp from './html/HtmlApp.tsx';

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
      <div id="canvas-container">
        {import.meta.env.VITE_APP_ENV === 'dev' ? <DevBar /> : null}

        <HtmlApp />
        <Canvas
          camera={{ position: [0, 0, 0], fov: 75 }}
          gl={{ alpha: true, antialias: false }}
          dpr={[1, 2]}
        >
          <Scene />
          {toggleEffect && <Effects />}

          {/* ==== Dev stuff ==== */}
          {/*<OrbitControls />*/}
          {import.meta.env.VITE_APP_ENV === 'dev' ? <StatsGl /> : null}
        </Canvas>
      </div>
    </RouterProvider>
  );
}

export default App;
