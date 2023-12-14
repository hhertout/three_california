import React from 'react';
import Home from './pages/Home.tsx';
import { useLocationHash } from '../router/hooks.tsx';
import { ROUTES } from '../App.tsx';
import CarOverview from './pages/CarOverview.tsx';

const HtmlApp = () => {
  const location = useLocationHash();
  switch (location) {
    case ROUTES.HOME: {
      return <Home />;
    }
    case ROUTES.CAR_OVERVIEW: {
      return <CarOverview />;
    }
  }
};

export default HtmlApp;
