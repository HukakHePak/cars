import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
// import 'semantic-ui-css/semantic.min.css';
// import { StoreProvider } from './providers/StoreProvider.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
