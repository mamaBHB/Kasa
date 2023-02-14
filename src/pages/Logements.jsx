import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../JSON/logements.json'
import Collapse from '../components/Collapse'
import NotFound from './404'
import Carrousel from '../components/Carrousel'
import HostName from '../components/HostName'
import Tags from '../components/Tags'
import Rating from '../components/Rating'

function Accomodation() {
  const { id } = useParams(window.location.href)
  console.log("Voilà l'appartement numéro " + id)

  const logement_Data = Data.find((object) => object.id === id)
  if (!logement_Data) return <NotFound />

  return (
    <main className="accommodation">
      <Carrousel slideshow={logement_Data.pictures} />
      <section className="accommodation_top">
        <div className="accommodation_details_left">
          <h1 className="accommodation_title">{logement_Data.title}</h1>
          <h2 className="accommodation_location">{logement_Data.location}</h2>
          <div className="accommodation_tags">
            <Tags tags={logement_Data.tags} />
          </div>
        </div>

        <div className="accommodation_details_right">
          <div className="accommodation_hostCard">
            <Rating rating={logement_Data.rating} />
            <HostName host={logement_Data.host} />
          </div>
        </div>
      </section>
      <section className="about">
        <Collapse title="Description">
          <span>
            {logement_Data.description}
          </span>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            <li className='collapse_logement'>
              {logement_Data.equipments}
            </li>
          </ul>
        </Collapse>
      </section>
    </main>
  )
}

export default Accomodation