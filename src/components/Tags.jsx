function Tags({ tags }) {
    return (
      <div className="tags">
        {tags.map((tags, index) => {
          return (
            <span key={index} className="each_tag">
              {tags}
            </span>
          )
        })}
      </div>
    )
  }
  
  export default Tags