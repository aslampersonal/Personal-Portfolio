import IMG1 from "../Assets/reactEcomerce.png";
import IMG2 from "../Assets/todoredux.png";
import IMG3 from "../Assets/backend.png";
import IMG4 from "../Assets/perosnalPortfolio.jpg"
 // import IMG4 from "../../assets/Covid-19 Project.jpg";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";
import React from "react";
import "./Portfolio.css";

const portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "UCOS - E-commerce MERN Stack Project",
      img: IMG3,
      description: "UCOS (online cosmetic shop) - E-commerce MERN Stack Project ",
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
      link: "https://main--marvelous-trifle-b2888a.netlify.app/",
      github: "https://github.com/aslampersonal/Redux-ToDo.git",
    },
    // {
    //   id: 3,
    //   title: "Online Furniture Shop Website with React.js",
    //   img: IMG1,
    //   description: "An Online Furniture Shop Website.",
    //   technologies: "Html | CSS | Javascript | React Js",
    //   link: "https://lucky-hummingbird-9e9472.netlify.app/",
    //   github: "https://github.com/athuljain/React-online-furniture-shop",
    // },
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
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            {/* <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div> */}
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
