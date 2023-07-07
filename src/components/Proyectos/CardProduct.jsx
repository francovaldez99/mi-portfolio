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
    <Modal 
       isOpen={isOpen}
       handleModalClose={handleModalClose}>
        <div className="project-details">

          <div>
    <a href={item?.link} target='_blank' rel="noreferrer" className=''><h2><BsLink45Deg/>ir al proyecto</h2></a>
      <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} className='image-detail-project'/>
          </div>
  <div>
    <a href={item.link} target='_blank' rel="noreferrer">
    </a>
    <h2>Tecnologías</h2>
    <ul>
      {item.tecnologias.map(
        (tecno,index)=>(
          <li key={index}>{tecno}</li>
          ))}
    </ul>
    <p>{item.textComplete ? item.textComplete : item.text}</p>

  </div>
</div>

        </Modal>
  </div>
  )
}

export default CardProduct