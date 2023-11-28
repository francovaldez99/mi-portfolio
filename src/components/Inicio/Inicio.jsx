import React from 'react'
import "./Inicio.css"
import fotoperfil from '../../assets/imgs/Francodev.jpg'
import { MdFileUpload} from "react-icons/md"
const CV=process.env.REACT_APP_YOUR_DOWNLOAD_CV
function Inicio() {
  return (
      
            <header className='inicio' id="inicio">

          <article className='inicio-text-container'>
            <h1 className='title-inicio'>Soy Franco Valdez
           
              </h1>
              <span className='subtitle-inicio'>
              Desarrollador Web</span>
            <p>Un entusiasta de la programación con experiencia en la administración de tiendas online.  A lo largo de los años, he adquirido habilidades en gestión de proyectos y atención al cliente gracias a mi trabajo en la administración . Ahora,  aplico mis conocimientos en programación y habilidades de resolución de problemas  buscando desafíos emocionantes y persiguiendo mi desarrollo profesional.</p>
            <div className='inicio-btn-container'>
                
                <a href={CV || "https://docs.google.com/document/d/1kpWOuUH4brwHEdNw3sHWkLJr4y0RLqQ58CMWvt9b64Y/edit?usp=sharing"} target="_blank" rel="noreferrer" className="contact-button descagar-cv"><MdFileUpload/> Descargar CV</a>
               
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