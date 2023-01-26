import { createRoot } from 'react-dom/client';
import Card from './components/Card';

const root = createRoot(document.getElementById('root'));

const renderApp = () => {
  root.render(
    <div>
      <Card title="Card 1" />
    </div>
  );
};

// @ts-ignore
window.renderApp = renderApp;
// @ts-ignore
window.root = root;
renderApp();
