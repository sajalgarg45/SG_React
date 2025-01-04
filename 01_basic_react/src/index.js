import React from 'react'; // Core foundation of React
import ReactDOM from 'react-dom/client'; // React DOM (Implementation) for web applications
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);