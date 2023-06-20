import { useEffect, useRef } from 'react';

interface IUseDidMountEffect {
  (func: () => unknown, deps: Array<unknown>): void;
}

const useDidMountEffect: IUseDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
