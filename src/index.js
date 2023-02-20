import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logement from './pages/Logements';
import Page404 from './pages/404';

import './css/style.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" element ={<Home />}/>
      <Route path = "/apropos" element ={<Apropos />}/>
      <Route path = "logement/:id" element ={<Logement />} />
      <Route path = "*" element ={<Page404 />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

