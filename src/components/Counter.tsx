import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid', padding: 10 }}>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: 5 }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}
