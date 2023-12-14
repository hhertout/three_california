import { useContext, useEffect, useState } from 'react';
import { RouterContext } from './RouterProvider.tsx';

export const useLocationHash = () => {
  const [locationHash, setLocationHash] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const handleHashChange = () => {
      setLocationHash(window.location.hash.slice(1));
    };

    window.addEventListener(('hashchange'), handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return locationHash;
};

export const useNavigate = () => {
  const { router } = useContext(RouterContext);

  return router.navigate;
};