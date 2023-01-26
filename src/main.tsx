import { createRoot } from 'react-dom/client';
import './useState';
import App from './App';
import React = require('react');

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
