import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logement from './pages/Logements';
import Page404 from './pages/404';

import './css/style.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home />}/>
      <Route path = "/apropos" element ={<Apropos />}/>
      <Route path = "logement/:id" element ={<Logement />} />
      <Route path = "*" element ={<Page404 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

