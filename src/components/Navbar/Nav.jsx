import React from 'react'
import { useState  } from 'react'
import "./Nav.css"
import {FaBars,FaTimes} from "react-icons/fa"
import logo from "../../assets/Captura-removebg-preview.png"
import { Link } from 'react-router-dom'
function Nav() {
  const [isOpen,SetIsOpen]=useState(false)
  function changeStatusOpen() {
    SetIsOpen(!isOpen)

  }
  return (
    <div className='nav-container'>
        <div id='inicio'>
          <img src={logo} alt='logo' height="100%" width="70px"/>
        </div>

            <nav className={`nav ${isOpen? "responsive-nav":""}`}>
            <button className='nav-btn nav-close-btn' onClick={changeStatusOpen}><FaTimes/></button>
                <a  className='nav-item'  onClick={changeStatusOpen}>Inicio</a>
                <a  className='nav-item'  onClick={changeStatusOpen}>Proyectos</a>
                <a  className='nav-item '  onClick={changeStatusOpen}>Contacto</a>
            </nav>

           
            {/* <button  className="nav-btn" onClick={changeStatusOpen}>
              <FaBars/>
            </button> */}
    </div>
  )
}

export default Nav