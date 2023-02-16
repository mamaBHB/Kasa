import StarColored from "../assets/star_colored.png";
import StarGrey from "../assets/star_grey.png";

function Rating(rating) {
    let content = []
  
    for (let i = 0; i < 5; i++) {
      if (i < parseInt(rating.rating)) {
        content.push(<img
          src={StarColored}
          alt="Star"
      />)
      } else {
        content.push(<img
          src={StarGrey}
          alt="Star"
      />)
        
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