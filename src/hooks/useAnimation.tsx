import { useCallback } from 'react';

interface AnimationParams {
  element: HTMLElement;
  duration: number;
  delay?: number;
}

interface FadeParams extends AnimationParams {
  animation: 'fade-in' | 'fade-out';
}

interface NeonFadeParams extends AnimationParams {
  animation: 'fade-in' | 'fade-out';
}

export const useAnimation = () => {
  const animate = useCallback(
    ({ animation, element, duration, delay }: FadeParams) => {
      setTimeout(() => {
        switch (animation) {
          case 'fade-in': {
            element.style.animation = `fade-in ${duration}ms ease-in-out forwards`;
            break;
          }
          case 'fade-out': {
            element.style.animation = `fade-out ${duration}ms ease-in-out forwards`;
            break;
          }
        }
      }, delay);
    },
    []
  );

  return { animate };
};

export const useNeonAnimation = () => {
  const animate = useCallback(
    ({ animation, element, duration, delay }: NeonFadeParams) => {
      switch (animation) {
        case 'fade-in': {
          element.style.animation = `fade-in-neon ${duration}ms ease-in-out ${delay}ms forwards`;
          break;
        }
        case 'fade-out': {
          element.style.animation = `fade-out-neon ${duration}ms ease-in ${delay}ms forwards`;
          break;
        }
      }
    },
    []
  );

  return { animate };
};
