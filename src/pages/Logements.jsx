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

  const accommodation = Data.find((object) => object.id === id)
  if (!accommodation) return <NotFound />

  return (
    <main className="accommodation">
      <Carrousel slideshow={accommodation.pictures} />
      <section className="accommodation_top">
        <div className="accommodation_details_left">
          <h1 className="accommodation_title">{accommodation.title}</h1>
          <h2 className="accommodation_location">{accommodation.location}</h2>
          <div className="accommodation_tags">
            <Tags tags={accommodation.tags} />
          </div>
        </div>

        <div className="accommodation_details_right">
          <div className="accommodation_hostCard">
            <Rating rating={accommodation.rating} />
            <HostName host={accommodation.host} />
          </div>
        </div>
      </section>
      <section className="accommodation_collapse">
        <Collapse
          className="accommodation_collapse_description"
          props={accommodation.description}
          title="Description"
        />
        <Collapse
          className="accommodation_collapse_equipments"
          props={accommodation.equipments}
          title="Équipements"
        />
      </section>
    </main>
  )
}

export default Accomodation