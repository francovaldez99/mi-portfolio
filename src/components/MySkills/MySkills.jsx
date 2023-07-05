import React from "react";
import "./MySkills.css";
import html from "../../assets/imgs/html_icon.svg";
import css from "../../assets/imgs/css_icon.svg";
import javascript from "../../assets/imgs/javascript_icon.svg";
import react from "../../assets/imgs/react_logo_icon.svg";
import redux from "../../assets/imgs/redux_icon.svg";
import node from "../../assets/imgs/node_icon.svg";
import express from "../../assets/imgs/express_icon.svg";
import sql from "../../assets/imgs/sql_icon.svg";
import sequelize from "../../assets/imgs/sequelize_icon.svg";
import typescript from "../../assets/imgs/Typescript_icon.svg";
import tailwind from "../../assets/imgs/tailwind_icon_.svg";
import postgres from "../../assets/imgs/postgres.svg";

function MySkills() {
  const Frontend = [
    {
      icon: html,
      name: "HTML",
    },
    {
      icon: css,
      name: "CSS",
    },
    {
      icon: javascript,
      name: "Javascript",
    },
    {
      icon: react,
      name: "React.js",
    },
    {
      icon: redux,
      name: "Redux",
    },
    {
      icon: tailwind,
      name: "Tailwind",
    },

    {
      icon: typescript,
      name: "Typescript",
    },
  ];
  const BackEnd = [
    {
      icon: node,
      name: "Node.js",
    },
    {
      icon: express,
      name: "Express.js",
    },
    {
      icon: sequelize,
      name: "Sequelize",
    },
    {
        icon: sql,
        name: "SQL",
      },
      {
        icon: postgres,
        name: "Postgres",
      },
  ];
 

  return (
    <section className="my-skills-section">
      <h2 className="title-skill">Mis Tecnologias</h2>
      {/* /**Front-End************************** */}
      <div >
          <div className="article-skills-container">
            <article>
              <h3 className="skills-title title-area">Frontend</h3>
              <div className="skills-container">
                {Frontend.map((item, index) => (
                  <div className="skill-card" key={index}>
                    <img src={item.icon} alt={item.name} />
                    {/* <h3>{item.name}</h3> */}
                  </div>
                ))}
              </div>
            </article>
            {/* /**Back-End******************************************** */}
            <article>
              <h3 className="skills-title title-area">Backend</h3>
              <div className="skills-container">
                {BackEnd.map((item, index) => (
                  <div className="skill-card" key={index}>
                    <img src={item.icon} alt={item.name} />
                    {/* <h3>{item.name}</h3> */}
                  </div>
                ))}
              </div>         
            </article>
           
            
          </div>
      </div>
    </section>
  );
}

export default MySkills;
