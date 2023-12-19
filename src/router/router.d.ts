export interface IRouter {
  useRouter(routes: Array<Route>): void;

  navigate(path: string): void;

  getHashName(): string;
}

export type Route = {
  path: string;
  effect?: () => void;
  element?: React.ReactNode;
  sceneElement?: React.ReactNode;
};
