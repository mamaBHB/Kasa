import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home />}/>
      <Route path = "/apropos" element ={<Apropos />}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

