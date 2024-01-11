/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Jaime.jpg";

const imageAltText = "Jaime Alberto Suarez Moctezuma.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Proyecto creación de una Base de Datos Biblioteca.",
    description:
      "Este proyecto tiene como objetivo principal digitalizar el sistema de gestión y administración de una biblioteca. La biblioteca, en busca de mayor eficiencia y reconocimiento, ha decidido adoptar un sistema basado en una base de datos. El administrador de base de datos desplegará una estructura robusta que permita la gestión integral de libros, empleados, préstamos, multas, géneros, editoriales y miembros.",
    url: "https://github.com/JaimeMoc/Biblioteca",
  },
  {
    title: "Descripción de la Ciencia de Datos para el Aprendizaje Automático.",
    description:
      "Este repositorio forma parte de la ruta profesional de Microsoft Descripción de la Ciencia de Datos para el Aprendizaje Automático. Aquí encontrarás fragmentos de código en Python relacionados con tareas comunes de machine learning, así como ejemplos específicos de la ruta de aprendizaje.",
    url: "https://github.com/JaimeMoc/Microsoft_Learn_Machine",
  },
  {
    title: "Proyecto exploratorio sobre los salarios mínimos en México.",
    description:
      "Este proyecto tiene como objetivo realizar un análisis exploratorio de datos para obtener información relevante y patrones ocultos en un conjunto de datos recopilados acerca de los salarios mínimos de México recolectados durante diferentes años. A través de técnicas de visualización y estadística descriptiva, se busca comprender mejor la estructura y las característica de los datos.",
    url: "https://github.com/JaimeMoct/SalariosMin",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
