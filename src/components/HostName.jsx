function HostName({ host }) {
    const HostName = host.name.split(' ')
    const [name, lastname] = HostName
    return (
      <div className="host_details">
        <div>
          <p>{name.trim()}</p>
          <p>{lastname.trim()}</p>
        </div>
        <div>
        <img src={host.picture} alt={host.id} />
        </div>
      </div>
    )
}
  
  export default HostName