import { useState, useCallback } from 'react';

const useModal = (initial = false) => {
  const [isShowing, setIsShowing] = useState(initial);

  return {
    isShowing,
    toggle: useCallback(() => setIsShowing(status => !status), []),
  };
};

export default useModal;
