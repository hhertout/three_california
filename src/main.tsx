import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import DevContextProvider from './context/DevContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DevContextProvider>
      <App />
    </DevContextProvider>
  </React.StrictMode>,
);
