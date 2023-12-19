import { createContext, ReactNode, useEffect } from 'react';
import Router from './router.ts';
import { Route } from './router.d';

type RouterContext = {
  router: Router;
  routes: Array<Route>;
};

type RouterProviderProps = {
  children: ReactNode;
  routes: Array<Route>;
};

export const RouterContext = createContext<RouterContext>({
  router: new Router(),
  routes: [],
});

const RouterProvider = ({ children, routes }: RouterProviderProps) => {
  const router = new Router();

  useEffect(() => {
    router.useRouter(routes);
  }, [router]);

  return (
    <RouterContext.Provider value={{ router, routes }}>
      {children}
    </RouterContext.Provider>
  );
};

export default RouterProvider;
