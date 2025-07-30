import App from './App.jsx'; // <-- Add the .jsx extension
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional, only if you have a global stylesheet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
