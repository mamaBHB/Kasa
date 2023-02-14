import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../JSON/logements.json'
import Collapse from '../components/Collapse'
import NotFound from './404'
import Carrousel from '../components/Carrousel'
import HostName from '../components/HostName'
import Tags from '../components/Tags'
import Rating from '../components/Rating'

function Logement() {
  const { id } = useParams(window.location.href)

  const logement_Data = Data.find((object) => object.id === id)
  if (!logement_Data) return <NotFound/>

  return (
    <main className="logement">
      <Carrousel slideshow={logement_Data.pictures} />
      <section className="logement_top">
        <div className="logement_details_left">
          <h1 className="logement_title">{logement_Data.title}</h1>
          <h2 className="logement_location">{logement_Data.location}</h2>
          <div className="logement_tags">
            <Tags tags={logement_Data.tags} />
          </div>
        </div>

        <div className="logement_details_right">
          <div className="logement_hostCard">
            <HostName host={logement_Data.host} />
            <Rating rating={logement_Data.rating} />
          </div>
        </div>
      </section>
      <section className="about_logement">
        <Collapse title="Description">
          <span>
            {logement_Data.description}
          </span>
        </Collapse>
        <Collapse title="Équipements">
          <span className="about_logement_equipments">
            {logement_Data.equipments}
          </span>
        </Collapse>
      </section>
    </main>
  )
}

export default Logement