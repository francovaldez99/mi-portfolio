import React,{useState} from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import {BsLink45Deg} from "react-icons/bs"
import Modal from "../Modal/Modal"
function CardProduct({item,index}) {
    const [isOpen, SetIsOpen] = useState(false);
    const handleCardClick = () => {
        SetIsOpen(true);
      };
    
      const handleModalClose = () => {
        SetIsOpen(false)
      };

  return (
    <div key={index} className="proyecto-card">
    <div
      className="img-proyecto-card"
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        transition: "opacity 0.3s",
        backgroundPositionX: "-60px",
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = 0.5)}
      onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
    ></div>

    <div className="contenido-detail">
    <h2 className="proyecto-card-title">{item.name}</h2>
      <p>{item?.text}</p>
      <button className="contact-button descagar-cv " id="btn-ver-mas" onClick={()=>handleCardClick()}>
        <span>Ver más </span>
        <span>
          <AiOutlineArrowRight />
        </span>
      </button>
    </div>
    // ...

<Modal isOpen={isOpen} handleModalClose={handleModalClose}>
  <div className="modal-content">
    
    <h2 className="project-title">{item.name} </h2>
    
    <img src={item.image} alt={item.name} className="image-detail-project" />
    <h2>Tecnologías</h2>
    <ul className="tech-list">
      {item.tecnologias.map((tecno, index) => (
        <li key={index}>{tecno}</li>
      ))}
    </ul>
    <a href={item.link} target="_blank" rel="noreferrer" className="project-link">
      Ir al proyecto
    </a>
    <p className="project-description">
      {item.textComplete ? item.textComplete : item.text}
    </p>
  </div>
</Modal>

// ...

   
  </div>
  )
}

export default CardProduct