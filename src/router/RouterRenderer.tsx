import { useLocationHash, useRouter } from './hooks.tsx';
import Error404 from '../app/error/Error404.tsx';

type Props = {
  type: 'scene' | 'html';
};

const RouterRenderer = ({ type }: Props) => {
  const location = useLocationHash();
  const { routes } = useRouter();

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === location) {
      if (type === 'scene') {
        return routes[i].sceneElement;
      } else if (type === 'html') {
        return routes[i].element;
      }
    }
  }

  return <>{type === 'html' ? <Error404 /> : null}</>;
};

export default RouterRenderer;
