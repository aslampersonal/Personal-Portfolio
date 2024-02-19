import IMG1 from "../Assets/ucosEcommerce.png";
import IMG2 from "../Assets/todoredux.png";
import IMG3 from "../Assets/AudioPlayer.png";
import IMG4 from "../Assets/PersonalPortfolio.png"
import React from "react";
import "./Portfolio.css";

const portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "UCOS - E-commerce",
      img: IMG1,
      description: "UCOS (online cosmetic shop) - E-commerce using MERN Stack Tech. ",
      technologies: "NodeJs | Express | MongoDB | React Js | HTML | CSS | Javascript",
      link: "https://github.com/aslampersonal/ecos.git",
      github: "https://github.com/aslampersonal/ecos.git",
    },
    {
      id: 2,
      title: "To-Do App with Redux",
      img: IMG2,
      description: "Todo Application.",
      technologies: "React | Redux",
      link: "https://redux-to-do-kappa.vercel.app/",
      github: "https://github.com/aslampersonal/Redux-ToDo.git",
    },
    {
      id: 3,
      title: "Simple Audio Player",
      img: IMG3,
      description: "Simple Audio Player using ReactJs",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://audio-player-app-ten.vercel.app/",
      github: "https://github.com/aslampersonal/audio-player-app",
    },
    {
      id: 4 ,
      title: "Personal Portfolio app",
      img: IMG4,
      description: "Personal Portfolio app ",
      technologies: "HTML | CSS | JavaScript | ReactJS ",
      link: "https://aslam-mohammed.vercel.app/",
      github: "https://github.com/aslampersonal/Personal-Portfolio/tree/main",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default portfolio;
