import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CarroComprasApp } from './CarroComprasApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarroComprasApp />
    </BrowserRouter>
  </React.StrictMode>,
)
