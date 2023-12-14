import { useLocationHash } from '../router/hooks.tsx';
import { ROUTES } from '../App.tsx';
import Home from '@pages/Home.tsx';
import CarOverview from '@pages/CarOverview.tsx';

const Scene = () => {
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

export default Scene;