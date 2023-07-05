import React, { useRef ,useState} from "react";
import emailjs from "@emailjs/browser";
import "./Contacto.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdFileUpload } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const YOUR_SERVICE_ID=process.env.REACT_APP_YOUR_SERVICE_ID
const  YOUR_TEMPLATE_ID =process.env.REACT_APP_YOUR_TEMPLATE_ID
const YOUR_PUBLIC_KEY =process.env.REACT_APP_YOUR_PUBLIC_KEY
function Contacto() {
  const form = useRef();
  const [StateForm,SetStateForm]=useState("Enviar")


  const sendEmail = (e) => {
    e.preventDefault();
    
      SetStateForm("Cargando...")
   
    if(!YOUR_TEMPLATE_ID || !YOUR_SERVICE_ID || !YOUR_PUBLIC_KEY){
      console.log("error");
      return
    }
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          
          // SetStateForm("Mensaje Enviado");
          alert("Mensaje Enviado")
   
        
        },
        )
        .catch((error) => {
          console.log(error.text);
          
          
            SetStateForm("Error")
         
          
        })
        
        .finally(()=>{
            form.current.reset();
            SetStateForm("Enviar")

           
            console.log(StateForm);
     
        })

  };

  const buttonId =()=>{
 if (StateForm==="Enviar") return "Enviar"
  if(StateForm==="Cargando...") return "button-loading"
 if(StateForm==="Mensaje Enviado") return "button-success"
 if(StateForm==="Error") return "button-error "
  }
  
    
  return (
    <div className="contenido-contact">
      <h2 className="contact-title">Contactame </h2>

      <section className="contact-container" >
        <div className="contact-wrapper" >
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h4>Envíame un mail</h4>
            <p className="label-input-container">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="input"
                required
              />
            </p>
            <p className="label-input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="input"
                required
              />
            </p>
            <p className="label-input-container block">
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                className="text-area"
                required
                rows="3"
              />
            </p>
            <p className="label-input-container block ">
              
              <button type="submit" className="contact-button" id={buttonId()}>{StateForm}</button>
            </p>
          </form>
        <article className="contact-info" id="contacto">
          <h4>Informacion de contacto</h4>
          <p> Estoy aquí para colaborar contigo y hacer realidad tus ambiciosas metas. ¡Envíame un mensaje y comencemos a construir algo increíble juntos!</p>
          <ul>
            <li>
              <a>
                <span>
                  <AiOutlineMail />
                </span>
                <span>
                  
                  francomartinvaldez99@gmail.com</span>
              </a>
            </li>
            <li>
              <a>
                <span>
                  <AiOutlinePhone />
                </span>
                <span>+543704616884</span>
              </a>
            </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/franco-martin-valdez/"
                  target="_blank"
                  rel="noreferrer"
                >
                             <span>
                    <BsLinkedin /> mi linkedin
                  </span>
                </a>
              </li>
            
          </ul>
          <button className="contact-button descagar-cv" id="descargar-cv">
            <MdFileUpload /> Descargar CV
          </button>
          
        </article>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
