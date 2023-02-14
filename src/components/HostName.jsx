function HostName({ host }) {
    const HostName = host.name.split(' ')
    const [name, lastname] = HostName
    return (
      <div className="host_details">
        <div className="host_name">
          <p className="host_firstname">{name.trim()}</p>
          <p className="host_lastname">{lastname.trim()}</p>
        </div>
        <img src={host.picture} alt={host.id} />
      </div>
    )
}
  
  export default HostName