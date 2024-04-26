import { NavLink, Outlet } from "react-router-dom"

const HostLayout = () => {

  const activeLink = ({ isActive }) => isActive ? 'active-link' : ''
  
  return (
    <>
      <nav className="host-nav">
        <NavLink end className={activeLink} to={'/host'} >Dashboard</NavLink>
        <NavLink className={activeLink} to={'/host/income'} >Income</NavLink>
        <NavLink className={activeLink} to={'/host/reviews'} >Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout