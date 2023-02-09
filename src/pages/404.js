import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Page404() {
    return (
      <React.Fragment>
        <Header/>
        <section className="error">
            <h2 className="error_title">404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_link">
                Retourner sur la page d'accueil
            </Link>
        </section>
        <Footer/>
      </React.Fragment>
    )
  }
    
    export default Page404;
    