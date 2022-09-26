import React, { useState } from "react";

const projects = [
  {
    id: 1,
    img: "blackjack",
    href: "https://g2-devlights-bootcamp.vercel.app/",
    title: "Blackjack",
    description:
      "Juego de cartas donde el objetivo es derrotar a la banca. Debes tener una mano que puntúe más alto que la mano de la banca, sin pasarte de 21.",
  },
  {
    id: 2,
    img: "createResume",
    href: "https://create-your-resume.vercel.app/",
    title: "Crear CV",
    description: "Crea tu CV simplemente completando un formulario con esta aplicación.",
  },
  {
    id: 3,
    img: "sokoban",
    href: "https://sokoban-giulianoconti.vercel.app/",
    title: "Sokoban Juego",
    description:
      "Es un videojuego de rompecabezas donde el jugador empuja cajas en un almacén, tratando de llevarlos a los lugares de almacenamiento.",
  },
  {
    id: 5,
    img: "removeBg",
    href: "https://remove-background-react-giulianoconti.vercel.app/",
    title: "Remover Color de Fondo",
    description: "App donde puedes remover un color en específico de una imagen.",
  },

  {
    id: 5,
    img: "pokemon",
    href: "https://giuliannt.github.io/devlights-homework-2/",
    title: "Pokemon Buscador",
    description: "Sitio web donde hay que registrarse para poder buscar los pokemones.",
  },
  {
    id: 6,
    img: "weather",
    href: "https://clima-xi.vercel.app/",
    title: "Clima",
    description:
      "Página donde podemos seleccionar distintas localidades argentinas y obtener el clima actual y de la semana.",
  },
  {
    id: 7,
    img: "predic",
    href: "https://giuliannt.github.io/world-cup-predictions/",
    title: "Predicciones del Mundial",
    description: "Página donde podemos hacer nuestra predicción para el mundial de futbol 2022.",
  },
  {
    id: 8,
    img: "login",
    href: "https://giuliannt.github.io/devlights-homework-1/",
    title: "Inicio de Sesión",
    description: "Formulario falso donde nos podemos registrar y acceder como alumno o profesor.",
  },
  {
    id: 9,
    img: "tateti",
    href: "https://giuliannt.github.io/tic-tac-toe/",
    title: "Ta Te Ti",
    description: "Juego donde el ganador es el que consiga formar 3 en línea con su figura.",
  },
];

export const ProjectScreen = () => {
  const [projectNumber, setProjectNumber] = useState(1);

  const previousProject = () => {
    if (projectNumber === 1) {
      setProjectNumber(9);
    } else {
      setProjectNumber(projectNumber - 1);
    }
  };

  const nextProject = () => {
    if (projectNumber === 9) {
      setProjectNumber(1);
    } else {
      setProjectNumber(projectNumber + 1);
    }
  };

  return (
    <>
      <div className="height-for-absolutes" />
      <p className="project-title">PROYECTOS</p>
      <div className="project-container">
        <div className={`project-container-transform transform-${projectNumber}`}>
          {projects.map((project) => (
            <a className="project-card" href={project.href} key={project.id}>
              <div className={`project-card-image img-${project.img}`} alt={project.title}>
                <div className="project-card-info">
                  <div className="project-card-title">{project.title}</div>
                </div>
              </div>
              <div className="project-card-description">{project.description}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="project-navigation">
        <button className="project-navigation-button" onClick={previousProject}>
          <svg
            className="project-navigation-button-text"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </button>
        <button className="project-navigation-button" onClick={nextProject}>
          <svg
            className="project-navigation-button-text"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </button>
      </div>
    </>
  );
};
