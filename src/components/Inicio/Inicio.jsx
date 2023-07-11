import React from 'react'
import "./Inicio.css"
import fotoperfil from '../../assets/imgs/Francodev.jpg'
import { MdFileUpload} from "react-icons/md"

function Inicio() {
  return (
      
            <header className='inicio' id="inicio">

          <article className='inicio-text-container'>
            <h1 className='title-inicio'>Soy Franco Valdez
           
              </h1>
              <span className='subtitle-inicio'>
              Desarrollador Frontend</span>
            <p>Un entusiasta de la programación con experiencia en la administración de tiendas online.  A lo largo de los años, he adquirido habilidades en gestión de proyectos y atención al cliente gracias a mi trabajo en la administración . Ahora,  aplico mis conocimientos en programación y habilidades de resolución de problemas  buscando desafíos emocionantes y persiguiendo mi desarrollo profesional.</p>
            <div className='inicio-btn-container'>
                <button className="contact-button descagar-cv">
                <a href="https://drive.google.com/file/d/1qL_joUdTYi6un-KqfxhVNv5mlU-WHe3e/view?usp=sharing" target="_blank" rel="noreferrer"><MdFileUpload/> Descargar CV</a>
                </button>
              <a className="contact-button" href='#contacto'>
                  Contáctame
                </a>
            </div>
          <div>
        
          </div>
          </article>
          <article className='inicio-img-container'>
            <img src={fotoperfil} alt="foto de perfil "
              className='foto-perfil ' />
          </article>
                   
            </header>
    
          )
}

export default Inicio;