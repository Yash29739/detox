import React from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import { NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <div  className='navBar'>
        <div className="logo_text">
            <img src={logo} alt="Logo" className='logo'/>
            <p>Digital Detox</p>
        </div>
        <ul className='nav_items'>
            <li><NavLink to="/">Home </NavLink></li>
            <li><NavLink to="/schedules">Detox Schedules</NavLink></li>
            <li><NavLink to="/resources">Resource Hub</NavLink></li>
            <li><NavLink to="/tracker">Progress Tracker</NavLink></li>
        </ul>
        <NavLink to="/login">
          <button className='btn' > Log-In/Sign-Up </button>
        </NavLink>
    </div>
  )
}

export default NavBar