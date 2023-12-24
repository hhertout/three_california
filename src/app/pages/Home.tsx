import React, { useEffect, useRef } from 'react';
import './home.css';
import { useNavigate } from '../../router/hooks.tsx';
import { useAnimation, useNeonAnimation } from '../../hooks/useAnimation.tsx';

const Home = () => {
  const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { animate } = useAnimation();
  const { animate: neonAnimate } = useNeonAnimation();

  const handleBtnClick = () => {
    const duration = 200;
    if (!btnRef.current) return;
    animate({ animation: 'fade-out', element: btnRef.current, duration });

    if (!titleRef.current) return;
    neonAnimate({ animation: 'fade-out', element: titleRef.current, duration });
    setTimeout(() => {
      navigate('/car-overview');
    }, duration);
  };

  useEffect(() => {
    if (!btnRef.current) return;
    animate({
      animation: 'fade-in',
      element: btnRef.current,
      duration: 1000,
      delay: 1000,
    });
    if (!titleRef.current) return;
    neonAnimate({
      animation: 'fade-in',
      element: titleRef.current,
      duration: 2000,
      delay: 500,
    });
  }, []);

  return (
    <>
      <h1 ref={titleRef} className={'main-title font-neon zi-3'}>
        Welcome to California
      </h1>
      <button
        ref={btnRef}
        className={'main-btn enter-btn zi-3'}
        onClick={handleBtnClick}
      >
        Discover
      </button>
    </>
  );
};

export default Home;
