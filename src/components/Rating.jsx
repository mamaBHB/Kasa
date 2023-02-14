function Rating(rating) {
    let content = []
  
    for (let i = 0; i < 5; i++) {
      if (i < parseInt(rating.rating)) {
        content.push(<i key={i} className="fa-solid fa-star fullStar"></i>)
      } else {
        console.log(parseInt(rating.rating))
        content.push(<i key={i} className="fa-solid fa-star emptyStar"></i>)
      }
    }
  
    return (
      <div className="host_rating">
        {content.map((star) => {
          return star
        })}
      </div>
    )
  }
  
  export default Rating