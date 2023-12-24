import { useDevContext } from '../../context/DevContext.tsx';
import { useNavigate } from '../../router/hooks.tsx';
import './devbar.css';

const DevBar = () => {
  const { toggleEffect, handleToggleEffectChange } = useDevContext();
  const navigate = useNavigate();
  return (
    <div className={'dev-nav-btn'}>
      <button onClick={handleToggleEffectChange} className={'dev-btn'}>
        PPE {toggleEffect ? '(on)' : '(off)'}
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
        className={'dev-btn'}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate('/car-overview');
        }}
        className={'dev-btn'}
      >
        Car Overview
      </button>
      <button
        onClick={() => {
          navigate('/about-me');
        }}
        className={'dev-btn'}
      >
        About me
      </button>
    </div>
  );
};

export default DevBar;
