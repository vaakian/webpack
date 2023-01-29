import Card from './components/Card';
import './App.css';
import ExternalStore from './components/ExternalStore';
import { lazy, Suspense } from 'react';
const Counter = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/Counter')), 500)
  })
});

export default function App() {
  return (
    <div>
      <h3>hello world</h3>
      <Card title="from App" />
      <Suspense fallback={<h2>loading Counter...</h2>}>
        <Counter />
      </Suspense>
      <ExternalStore />
    </div>
  );
}
