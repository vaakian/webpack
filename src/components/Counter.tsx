import { useState } from 'react';
import { useDebounce, useThrottle } from '../utils/timerHook';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid', padding: 10 }}>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: 5 }}>
        <button onClick={useThrottle(() => setCount(count + 1), 500)}>Increment</button>
        <button onClick={useDebounce(() => setCount(count - 1), 200)}>Decrement</button>
      </div>
    </div>
  );
}
