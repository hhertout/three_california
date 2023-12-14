import { useDevContext } from '../context/DevContext.tsx';
import { useNavigate } from '../router/hooks.tsx';

const DevBar = () => {
  const { toggleEffect, handleToggleEffectChange } = useDevContext();
  const navigate = useNavigate();
  return (
      <div className={'nav-btn'}>
        <button
          onClick={handleToggleEffectChange}
        >
          PPE {toggleEffect ? '(on)' : '(off)'}
        </button>
        <button onClick={() => {
          navigate('/');
        }} className={'btn-reset'}>
        Home
      </button>
      <button onClick={() => {
          navigate('/car-overview');
      }} className={'btn'}>
        View 1
      </button>
      </div>
  );
};

export default DevBar;