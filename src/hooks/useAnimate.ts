import { useState, useEffect } from 'react';

const useAnimate = (): boolean => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setTimeout(() => setInProp(true), 200);
  }, []);
  return inProp;
};

export default useAnimate;
