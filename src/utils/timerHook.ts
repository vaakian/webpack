import { useCallback, useEffect, useRef } from 'react';

type AnyFn = (...args: any[]) => void;
export function useThrottle<T extends AnyFn>(fn: T, ms: number) {
  const latestFn = useRef(fn);
  const lock = useRef(false);
  const timer = useRef<number | null>(null);

  latestFn.current = fn;

  const debounced = useCallback((...args: Parameters<T>) => {
    if (lock.current) return;

    lock.current = true;
    latestFn.current();
    timer.current = setTimeout(() => {
      lock.current = false;
    }, ms);
  }, [ms]);

  useEffect(() => {
    clearTimeout(timer.current);
  }, [ms]);

  return debounced;
}


export function useDebounce<T extends AnyFn>(fn: T, ms: number) {
  const latestFn = useRef(fn);
  const timer = useRef<number | null>(null);

  latestFn.current = fn;

  const clear = () => {
    clearTimeout(timer.current)
    timer.current = null
  }

  const debounced = useCallback((...args: Parameters<T>) => {
    clear()
    timer.current = setTimeout(latestFn.current, ms);
  }, [ms]);

  useEffect(clear, [ms]);

  return debounced;
}