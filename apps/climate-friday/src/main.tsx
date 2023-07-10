import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TRPCProvider } from './utils/api';

import './main.css';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  //   <React.StrictMode>
  //    <App />
  // </React.StrictMode>

  <React.StrictMode>
    <TRPCProvider>
     <App />
    </TRPCProvider> 
  </React.StrictMode>
);