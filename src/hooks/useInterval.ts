import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
