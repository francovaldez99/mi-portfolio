import React,{useState} from "react";
import "./Modal.css";
import { GrClose } from "react-icons/gr";

function Modal({ children , isOpen, handleModalClose }) {
    
  return (
    <>
    {
        isOpen && 
        <div className="overlay" >
          <div className="contenedor-modal">
            <div className="contenido-modal">
              {children}
            </div>
            <div className="contenedor-boton-cerrar-modal">
              <button className="boton-cerrar-modal" onClick={handleModalClose}>
                <GrClose />
              </button>
            </div>
          </div>
        </div>
    }
    </>
  );
}

export default Modal;
