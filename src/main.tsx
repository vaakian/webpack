import { createRoot } from 'react-dom/client';
import './useState';
import Card from './components/Card';

const root = createRoot(document.getElementById('root'));

root.render(
  <div>
    <Card title="Main app" />
  </div>
);
