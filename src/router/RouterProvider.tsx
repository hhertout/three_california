import { createContext, ReactNode, useEffect } from 'react';
import Router from './router.ts';
import { Route } from './router.d';

export const RouterContext = createContext({ router: new Router() });

type RouterProviderProps = {
  children: ReactNode,
  routes: Array<Route>
}

const RouterProvider = ({ children, routes }: RouterProviderProps) => {
  const router = new Router();

  useEffect(() => {
    router.useRouter(routes);
  }, [router]);

  return (
    <RouterContext.Provider value={{ router }}>
      {children}
    </RouterContext.Provider>
  );
};

export default RouterProvider;