import { Link } from "react-router-dom";

function Page404() {
    return (
        <section className="error">
            <h2 className="error_title">404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_link">
                Retourner sur la page d'accueil
            </Link>
        </section>
    )
  }
    
    export default Page404;
    