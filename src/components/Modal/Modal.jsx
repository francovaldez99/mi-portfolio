import "./Modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
                <AiOutlineCloseCircle />
              </button>
            </div>
          </div>
        </div>
    }
    </>
  );
}

export default Modal;
