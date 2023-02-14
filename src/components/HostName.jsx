function HostName({ host }) {
    const hostNameSplitted = host.name.split(' ')
    const [name, lastname] = hostNameSplitted
  
    return (
      <div className="accommodation_host_details">
        <div className="accommodation_host_name">
          <p className="host_firstname">{name.trim()}</p>
          <p className="host_lastname">{lastname.trim()}</p>
        </div>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={host.picture}
          // eslint-disable-next-line no-template-curly-in-string
          alt="{`Photo de '${accommodation.host.name}`}"
          className="accommodation_host_picture"
        />
      </div>
    )
  }
  
  export default HostName