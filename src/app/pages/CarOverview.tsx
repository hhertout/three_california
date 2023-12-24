import React, { useEffect, useRef } from 'react';
import './carOverview.css';
import SocialBar from '@app/components/SocialBar.tsx';
import MouseIcon from '@app/components/icons/MouseIcon.tsx';
import CaretUpIcon from '@app/components/icons/CaretUpIcon.tsx';
import CaretDownIcon from '@app/components/icons/CaretDownIcon.tsx';
import { useAnimation } from '../../hooks/useAnimation.tsx';

const CarOverview = () => {
  const scrollInfoRef = useRef(null);
  const { animate } = useAnimation();

  useEffect(() => {
    if (!scrollInfoRef.current) return;
    animate({
      animation: 'fade-in',
      element: scrollInfoRef.current,
      duration: 1000,
      delay: 500,
    });
  }, []);

  return (
    <>
      <div className={'social-bar-container'}>
        <SocialBar />
      </div>
      <div ref={scrollInfoRef} className={'scroll-info'}>
        <span>
          <i>Scroll to turn</i>
        </span>
        <div className={'scroll-info-indicator'}>
          <div className={'scroll-info-indicator-up'}>
            <CaretUpIcon size={18} />
          </div>
          <div>
            <MouseIcon size={26} />
          </div>
          <div className={'scroll-info-indicator-down'}>
            <CaretDownIcon size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarOverview;
