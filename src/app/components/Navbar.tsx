import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './navbar.css';
import { useAnimation } from '../../hooks/useAnimation.tsx';
import { useNavigate } from '../../router/hooks.tsx';

type Props = {
  menu: Array<Menu>;
};

export type Menu = {
  label: string;
  path?: string;
  href?: string;
};

const Navbar = ({ menu }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const modalRef = useRef(null);

  const handleActiveChange = useCallback(() => {
    setActive((active) => !active);
  }, [active]);

  return (
    <>
      <nav className={'nav zi-4'}>
        <button onClick={handleActiveChange} className={'btn nav-btn p-2 m-1'}>
          Menu
        </button>
      </nav>

      <NavModal
        ref={modalRef}
        active={active}
        menu={menu}
        handleActiveChange={handleActiveChange}
      />
    </>
  );
};

type NavModalProps = {
  active: boolean;
  menu: Array<Menu>;
  handleActiveChange: () => void;
};

const NavModal = forwardRef<HTMLDivElement, NavModalProps>((props, ref) => {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const { active, menu, handleActiveChange } = props;
  const navigate = useNavigate();
  const { animate } = useAnimation();

  useEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      animate({ animation: 'fade-in', element: ref.current, duration: 500 });
    }

    linkRefs.current.forEach((link, index) => {
      if (link) {
        animate({
          animation: 'fade-in',
          element: link,
          duration: 500,
          delay: 500 + index * 500,
        });
      }
    });

    return () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.style.animation = '';
      }

      linkRefs.current.forEach((link) => {
        if (link) {
          link.style.animation = '';
        }
      });
    };
  }, [active]);

  return (
    <div
      ref={ref}
      className={'modal-menu-open'}
      style={active ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={'menu-header'}>
        <button className={'btn menu-close-btn'} onClick={handleActiveChange}>
          Close Menu
        </button>
        <h1>Menu</h1>
      </div>

      <div className={'nav-menu-container'}>
        {menu.map((item, index) => {
          return (
            <a
              key={index}
              className={'btn menu-nav-btn'}
              aria-label={`Go to ${item.href}`}
              onClick={(e) => {
                e.preventDefault();
                if (item.path) {
                  navigate(item.path);
                }
                handleActiveChange();
              }}
              href={item.href ? item.href : undefined}
              ref={(el) => {
                if (el && !linkRefs.current.includes(el)) {
                  linkRefs.current.push(el);
                }
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
});

export default Navbar;
