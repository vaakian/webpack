import { useEffect, useState, useSyncExternalStore } from 'react';

export function createStore<T>(initialState: T) {
  let state = initialState;
  const subscribers = new Set<(v: T) => void>();
  const store = {
    subscribe(subscriber: (v: T) => void) {
      subscribers.add(subscriber);
      return () => {
        subscribers.delete(subscriber);
      };
    },
    getState() {
      return state;
    },
    setState(s: T) {
      // publish the new state
      subscribers.forEach((sub) => sub((state = s)));
    },
    // hook implement 1
    useStore<S>(selector: (state: T) => S) {
      const [s, setS] = useState(selector(state));
      useEffect(() => {
        return store.subscribe((newState) => {
          // update with selector
          setS(selector(newState));
        });
      }, []);
      return s;
    },
    // hook implement 2
    useStore2<S>(selector: (state: T) => S) {
      return useSyncExternalStore(
        store.subscribe,
        () => selector(state)
      );
    },
  };
  return store;
}

export const store = createStore({ age: 100 });
// @ts-ignore
window.store = store;
