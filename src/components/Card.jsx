import React from "react";
import { Link } from "react-router-dom"
import Logement from "../JSON/logements.json"

function Card () {
    return (
        <div className="cards">
            {Logement.map ((Element) => (
                <Link to = { `logement/${Element.id}`} 
                    key = {Element.id} 
                    className="card"
                >
                    <img src = { Element.cover } alt = { Element.title } />
                    <p> { Element.title }</p>
                </Link>
            ))}
        </div> 
    )
}

export default Card;