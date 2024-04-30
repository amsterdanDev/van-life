import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

const HostVanDetail = () => {
  const van = useLoaderData()

  const activeLink = ({ isActive }) => isActive ? 'active-link' : ''

  if (!van) return <i>Loading...</i>

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${van.type}`}
            >
              {van.type}
            </i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink end className={activeLink} to={'.'} >Details</NavLink>
          <NavLink className={activeLink} to={'pricing'} >Pricing</NavLink>
          <NavLink className={activeLink} to={'photos'} >Photos</NavLink>
        </nav>

        <Outlet context={van} />
      </div>
    </section>
  )
}

function loader({ params }) {
  return getHostVans(params.id)
}

export default HostVanDetail
export { loader }
