import React, { useState } from 'react'
import leftArrow from "../assets/left_arrow.png";
import rightArrow from "../assets/right_arrow.png";

function Carrousel({ slideshow }) {
  let [displayPicture, changePicture] = useState(0)
  let pictureNumber = slideshow.length

  const nextSlide = () => {
    if (displayPicture === 0) {
      changePicture(pictureNumber - 1)
    } else {
      changePicture(displayPicture - 1)
    }
    return changePicture
  }

  const prevSlide = () => {
    if (displayPicture === pictureNumber - 1) {
      changePicture((pictureNumber = 0))
    } else {
      changePicture(displayPicture + 1)
    }
    return changePicture
  }

  return (
    <div className="slideshow_content">
      {slideshow.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === displayPicture
                ? 'slide slideshow_active-picture'
                : 'slide slideshow_inactive-picture'
            }
          >
            {index === displayPicture && (
              <img src={picture} alt="" className="slideshow_picture" />
            )}
          </div>
        )
      })}
      {pictureNumber > 1 ? (
        <div className="slideshow_arrows">
          <div className="slideshow_prev_arrow">
          <img
                className="left_arrow"
                src={leftArrow}
                alt="Toggle"
                onClick={nextSlide}
            />
          </div>
          <div className="slideshow_next_arrow">
          <img
                className="right_arrow"
                src={rightArrow}
                alt="Toggle"
                onClick={prevSlide}

            />
          </div>
        </div>
      ) : null}

      <span className="slideshow_number">
        {displayPicture + 1}/{slideshow.length}
      </span>
    </div>
  )
}
export default Carrousel