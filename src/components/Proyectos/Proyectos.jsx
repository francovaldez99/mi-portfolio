import React from "react";
import "./Proyectos.css";

import CardProduct from "./CardProduct";
function Proyectos({proyectos}) {

  return (
    <div className="section-proyectos"  id="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="proyecto-cards-container" >
        {proyectos.map((item, index) => {
          return (
           <CardProduct item={item} index={index} key={index} idProject={item.name}/>
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;
