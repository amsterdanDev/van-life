import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

const HostVans = () => {
  const vans = useLoaderData()

  return (
    <div>
      {vans.map(van => (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
          <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

async function loader() {
  await requireAuth()
  
  return getHostVans()
}

export default HostVans
export { loader }

