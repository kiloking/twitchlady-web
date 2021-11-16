import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logoWord" > 
        <img src={process.env.PUBLIC_URL+'/images'} alt=""/> 
      </Link>
    </div>
  )
}

export default Navbar
