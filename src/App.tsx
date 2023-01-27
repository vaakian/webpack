import Card from './components/Card';
import Counter from './components/Counter';
import './App.css';
import ExternalStore from './components/ExternalStore';

export default function App() {
  return (
    <div>
      <h3>hello world</h3>
      <Card title="from App" />
      <Counter />
      <ExternalStore />
    </div>
  );
}
