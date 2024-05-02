import { Link, NavLink } from "react-router-dom"
import avatar from '../assets/images/avatar-icon.png'
import { useEffect } from "react"

const Header = () => {
  const activeLink = ({ isActive }) => isActive ? 'active-link' : ''
  
  function fakeLogOut() {
    localStorage.clear()
  }
  
  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <NavLink className={activeLink} to="about">About</NavLink>
        <NavLink className={activeLink} to="host">Host</NavLink>
        <NavLink className={activeLink} to="vans">Vans</NavLink>
        <Link to="login" className="login-link">
          <img src={avatar} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  )
}

export default Header