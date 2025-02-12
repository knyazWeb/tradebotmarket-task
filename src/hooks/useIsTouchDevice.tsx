import { useEffect, useState } from 'react';

export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(navigator.maxTouchPoints > 0);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(navigator.maxTouchPoints > 0);
    };

    window.addEventListener('resize', checkTouch);

    return () => {
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  return isTouch;
};
