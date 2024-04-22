import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importamos Link de react-router-dom
import "./ProyectoDetail.css";
import { IoIosArrowRoundBack } from "react-icons/io";

function ProyectoDetail({ proyectos }) {
    const [projectActual, setProjectActual] = useState({});
    const { idProject } = useParams();
    const navigate=useNavigate()
    useEffect(() => {
        const proyectoEncontrado = proyectos.find((proyecto) => proyecto.name === idProject);
        setProjectActual(proyectoEncontrado || {});
    }, [idProject, proyectos]);

    return (
        <div className="proyecto-detail-container">
                <button to="/" className="proyecto-detail-back-link descargar-cv contact-button" onClick={()=>navigate("/")}>
                    <IoIosArrowRoundBack/>
                     Volver
                    </button> 
            <div className="proyecto-detail-content">
                <h2 className="proyecto-detail-title">{projectActual.name}</h2>
                <p className="proyecto-detail-description">{ projectActual.textComplete ? projectActual.textComplete : projectActual.text }</p>
                <img className="proyecto-detail-image" src={projectActual.image} alt={projectActual.name} />
                {projectActual.tecnologias && (
                    <div className="proyecto-detail-technologies">
                        <h3 className="proyecto-detail-technologies-title">Tecnologías utilizadas:</h3>
                        <ul className="proyecto-detail-technologies-list">
                            {projectActual.tecnologias.map((tecnologia, index) => (
                                <li key={index} className="proyecto-detail-technology">{tecnologia}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="proyecto-detail-links">
                    {projectActual.link && (
                        <a href={projectActual.link} target="_blank" rel="noopener noreferrer" className="proyecto-detail-link">Ver Proyecto</a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProyectoDetail;
