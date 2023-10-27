import React from "react";
import "./Proyectos.css";
import FusionaJob from "../../assets/imgs/FusionaJob.png";
import DiscoverTheWorld from "../../assets/imgs/DiscoverTheWorld.png"
import CalculadoraApp from "../../assets/imgs/CalculadorApp.png"
import DMArquitectura from "../../assets/imgs/DMArquitectura.png"
import HAMaderas from "../../assets/imgs/HAMaderas.png"
import CardProduct from "./CardProduct";

function Proyectos() {
  const proyectos = [
    {
      name: "FusinaJob  ",
      image: FusionaJob,
      text: "Fusionajob es un portal de empleos que conecta postulantes y reclutadores de empresas . Los usuarios pueden crear un perfil y postularse a ofertas de trabajo, y los reclutadores pueden crear perfiles de empresa y publicar ofertas de empleo....",
      textComplete:"Fusionajob es un portal de empleos que conecta postulantes y reclutadores de empresas . Los usuarios pueden crear un perfil y postularse a ofertas de trabajo, y los reclutadores pueden crear perfiles de empresa y publicar ofertas de empleo. La plataforma también ofrece un dashboard para administrar el sitio de manera eficiente. Fusionajob es una solución eficiente para el proceso de selección de personal en línea y es útil tanto para los postulantes como para los reclutadores.",
      tecnologias:[
        "react","redux","tailwind","Material UI","NodeJS","ExpressJs","PostgresSQL","Sequelize"
      ],
      link:"https://fusionajob.vercel.app/"
    },
    {
      name: "Estudio de Arquitectura DM",
      image: DMArquitectura,
      text: " Desarrollé esta página web para un grupo de arquitectos que buscaban promocionar sus servicios y ...",
      textComplete:"Desarrollé esta página web para un grupo de arquitectos que buscaban promocionar sus servicios y destacar sus proyectos realizados. La página web es totalmente responsive, adaptándose de manera óptima a diferentes dispositivos",
      tecnologias:[
        "ReactJs React-icons",
      ],
      link:"https://dmarquitectura.netlify.app"
    },
    {
        name: "HA maderas",
        image: HAMaderas,
        text: "Pagina web desarrollada para empresa que importa ...",
        textComplete:"Pagina web desarrollada para empresa que importa y vende puertas y zocalos a todo Paraguay ",
        tecnologias:[
          "ReactJs React-icons"
        ],
        link:"https://hamaderas.com"
        
    },
    {
      name: "Discover the world",
      image: DiscoverTheWorld,
      text: " aplicación web de turismo que utiliza las siguientes tecnologías: React, Redux, Express, Sequelize y Postgres.El home ofrece un campo de búsqueda, una lista de países con opciones de filtros, ordenamientos y paginación. Además...",
      textComplete:"",
      link:"https://github.com/francovaldez99/PI-Counties-DiscovertheWorld",
      tecnologias:[
        "react","redux","NodeJS","ExpressJs","PostgresSQL","Sequelize"
      ]
    },
    {
      name: "Calculadora App",
      image: CalculadoraApp,
      text: "La calculadora es totalmente funcional, con todas las operaciones básicas y una pantalla que muestra los números y las operaciones ingresadas , y ademas tiene interruptor de cambio de tema con tres opciones diferentes",
      textComplete:"",
      tecnologias:[
        "ReactJs"
      ],
      link:"https://helpful-salamander-f76ba2.netlify.app"
    },
  ];
  return (
    <div className="section-proyectos">
      <h2 id="proyectos">Mis Proyectos</h2>
      <div className="proyecto-cards-container" >
        {proyectos.map((item, index) => {
          return (
           <CardProduct item={item} index={index} key={index}/>
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;
