import React from 'react';
import RouterProvider from './router/RouterProvider.tsx';
import { Route } from './router/router.d';
import HtmlApp from './app/HtmlApp.tsx';
import SceneApp from './scene/SceneApp.tsx';
import SceneHome from './scene/pages/Home.tsx';
import Home from './app/pages/Home.tsx';
import CarOverview from './app/pages/CarOverview.tsx';
import SceneCarOverview from './scene/pages/CarOverview.tsx';

export enum ROUTES {
  HOME = '/',
  CAR_OVERVIEW = '/car-overview',
}

const routes: Array<Route> = [
  {
    path: ROUTES.HOME,
    sceneElement: <SceneHome />,
    element: <Home />,
  },
  {
    path: ROUTES.CAR_OVERVIEW,
    sceneElement: <SceneCarOverview />,
    element: <CarOverview />,
  },
];

function App() {
  return (
    <RouterProvider routes={routes}>
      <div id="canvas-container">
        <HtmlApp />
        <SceneApp />
      </div>
    </RouterProvider>
  );
}

export default App;
