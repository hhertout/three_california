import React from 'react';
import DevBar from './components/DevBar.tsx';
import RouterRenderer from '../router/RouterRenderer.tsx';

const HtmlApp = () => {
  return (
    <>
      {import.meta.env.VITE_APP_ENV === 'dev' ? <DevBar /> : null}

      <RouterRenderer type={'html'} />
    </>
  );
};

export default HtmlApp;
