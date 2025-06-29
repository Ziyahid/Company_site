import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import {CompanyProvider } from './context/CompanyContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <CompanyProvider>
    <App />
  </CompanyProvider>
  </BrowserRouter>
);
