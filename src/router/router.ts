import { IRouter, Route } from './router.d';

class Router implements IRouter {

  public navigate(path: string): void {
    window.location.hash = `#/${path.slice(1)}`;
  }

  public getHashName(): string {

    return window.location.hash.slice(1);
  }

  public useRouter(routes: Array<Route>): void {
    const currentHash = window.location.hash;

    if (currentHash === '') {
      window.location.hash = '#/';
    }

    routes.forEach((route: Route) => {
      if (currentHash === route.path) {
        route.effect();
      }
    });

    window.addEventListener('hashchange', () => {
      routes.forEach((route: Route) => {
        if (this.getHashName() === route.path) {
          route.effect();
        }
      });
    }, false);
  }
}

export default Router;