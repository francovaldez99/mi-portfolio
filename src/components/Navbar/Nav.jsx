import React from 'react'
import { useState  } from 'react'
import "./Nav.css"
import {FaBars,FaTimes} from "react-icons/fa"
function Nav() {
  const [isOpen,SetIsOpen]=useState(false)
  function changeStatusOpen() {
    SetIsOpen(!isOpen)

  }
  return (
    <div className='nav-container'>
        <div href='#inicio'>
          {/* <p className='logo'>Valdez </p> */}
        </div>

            <nav className={`nav ${isOpen? "responsive-nav":""}`}>
            <button className='nav-btn nav-close-btn' onClick={changeStatusOpen}><FaTimes/></button>
                <a href="#inicio" className='nav-item'  onClick={changeStatusOpen}>Inicio</a>
                <a href="#proyectos" className='nav-item'  onClick={changeStatusOpen}>Proyectos</a>
                <a href="#contacto" className='nav-item '  onClick={changeStatusOpen}>Contacto</a>
            </nav>

           
            <button  className="nav-btn" onClick={changeStatusOpen}>
              <FaBars/>
            </button>
    </div>
  )
}

export default Nav