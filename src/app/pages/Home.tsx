import React, { useEffect, useRef } from 'react';
import './home.css';
import { useNavigate } from '../../router/hooks.tsx';

const Home = () => {
  const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleBtnClick = () => {
    const duration = 400;
    if (!btnRef.current) return;
    btnRef.current.style.animation = `fade-out ${duration}ms ease-in forwards`;
    if (!titleRef.current) return;
    titleRef.current.style.animation = `fade-out-neon ${duration}ms ease-in forwards`;
    setTimeout(() => {
      navigate('/car-overview');
    }, duration);
  };

  useEffect(() => {
    if (!btnRef.current) return;
    btnRef.current.style.animation = 'fade-in 1s ease-in-out 1s forwards';
    if (!titleRef.current) return;
    titleRef.current.style.animation =
      'fade-in-neon 1s ease-in-out 0s forwards';
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
