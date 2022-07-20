// Imports
// ========================================================
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import RootProvider from './providers';
import RootRoutes from './routes';

// Render
// ========================================================
ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <RootRoutes />
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root')
);