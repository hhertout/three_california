import React from 'react';
import './carOverview.css';
import SocialBar from '@app/components/SocialBar.tsx';
import MouseIcon from '@app/components/icons/MouseIcon.tsx';
import CaretUpIcon from '@app/components/icons/CaretUpIcon.tsx';
import CaretDownIcon from '@app/components/icons/CaretDownIcon.tsx';

const CarOverview = () => {
  return (
    <>
      <div className={'social-bar-container'}>
        <SocialBar />
      </div>
      <div className={'scroll-info'}>
        <span>
          <i>Scroll to turn</i>
        </span>
        <div className={'scroll-info-indicator'}>
          <div>
            <CaretUpIcon size={18} />
          </div>
          <div>
            <MouseIcon size={26} />
          </div>
          <div>
            <CaretDownIcon size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarOverview;
