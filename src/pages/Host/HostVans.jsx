import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HostVans = () => {
  const [vans, setVans] = useState(null)

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  return (
    <div>
      {vans ? vans.map(van => (
        <Link to={`${van.id}`} key={van.id} className="host-van-link-wrapper">
          <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      )) : <i>Loading...</i> }
    </div>
  )
}

export default HostVans