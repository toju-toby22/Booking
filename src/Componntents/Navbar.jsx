/* eslint-disable no-unused-vars */
import React from 'react'
import "../Styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo_box">
            <h2>HealthMax</h2>
        </div>

        <div className="nav-page-sections-list">
            <ul className='sections-list'>
                <li className="list">Apply as a Consultant</li>
                <li className="list">Services</li>
                <li className="list">About Us</li>
                <li className="list">Contact Us</li>
                
            </ul>
        </div>

        <div className="signup_button">
            <button>
                Register
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
