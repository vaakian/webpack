import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('useState'));

const renderApp = () => {
  root.render(
    <div style={{ border: '1px solid green', padding: 10 }}>
      <Counter />
      <Counter />
    </div>
  );
};

// @ts-ignore
window.renderApp = renderApp;
// @ts-ignore
window.root = root;
renderApp();

// ---- implement `useState` ----

const memoizedState: any[] = [];
let index = 0;

function useState<T>(initialState: T): [T, (newState: T) => void] {
  // initialize
  if (!Reflect.has(memoizedState, index)) {
    Reflect.set(memoizedState, index, initialState);
  }
  // freeze current index
  const freezedIndex = index;
  function setState(newState: T) {
    // performance
    if (newState === memoizedState[freezedIndex]) return;

    memoizedState[freezedIndex] = newState;
    // reset when re-render
    index = 0;
    renderApp();
  }

  // increment index for next useState
  return [memoizedState[index++], setState];
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span style={{ paddingInline: '10px' }}>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
