import React from 'react';
import { useNavigate } from '../../router/hooks.tsx';
import './error.css';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className={'error-container'}>
      <h1 className={'message font-neon'}>Sorry, this page doesn't exist</h1>
      <button
        onClick={() => setTimeout(() => navigate('/'), 100)}
        className={'return-home-btn main-btn zi-4'}
      >
        Stay safe, Return Home...
      </button>
    </div>
  );
};

export default Error404;
