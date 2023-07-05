import React from "react";
import "./Proyectos.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import FusionaJob from "../../assets/imgs/FusionaJob.png";
import DiscoverTheWorld from "../../assets/imgs/DiscoverTheWorld.png"
import CalculadoraApp from "../../assets/imgs/CalculadorApp.png"
import DMArquitectura from "../../assets/imgs/DMArquitectura.png"
import HAMaderas from "../../assets/imgs/HAMaderas.png"

function Proyectos() {
  const proyectos = [
    {
      name: "FusinaJob  ",
      image: FusionaJob,
      text: "Fusionajob es un portal de empleos que conecta postulantes y reclutadores de empresas . Los usuarios pueden crear un perfil y postularse a ofertas de trabajo, y los reclutadores pueden crear perfiles de empresa y publicar ofertas de empleo....",
      
    },
    {
      name: "Estudio de Arquitectura DM",
      image: DMArquitectura,
      text: " Desarrollada para arquitectos que buscaban mostrar su trabajo y ofrecer sus servicios . la pagina web es responsive y cuenta con...",
    },
    {
        name: "HA maderas",
        image: HAMaderas,
        text: "Pagina web desarrollada para empresa que importa ...",
    },
    {
      name: "Discover the world",
      image: DiscoverTheWorld,
      text: " aplicación web de turismo que utiliza las siguientes tecnologías: React, Redux, Express, Sequelize y Postgres.El home ofrece un campo de búsqueda, una lista de países con opciones de filtros, ordenamientos y paginación. Además...",
    },
    {
      name: "Calculadora App",
      image: CalculadoraApp,
      text: " La calculadora es totalmente funcional, con todas las operaciones básicas y una pantalla que muestra los números y las operaciones ingresadas , y ademas tiene interruptor de cambio de tema con tres opciones diferentes",
    },
  ];
  return (
    <div className="section-proyectos">
      <h2 id="proyectos">Mis Proyectos</h2>
      <div className="proyecto-cards-container" >
        {proyectos.map((item, index) => {
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
              <h2 className="proyecto-card-title">{item.name}</h2>

              <div className="contenido-detail">
                <p>{item?.text}</p>
                <button className="contact-button " id="btn-ver-mas">
                  <span>ver mas </span>
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;
