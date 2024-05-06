import IMG1 from "../Assets/ucosEcommerce.jpg";
import IMG2 from "../Assets/todoredux.png";
import IMG3 from "../Assets/AudioPlayer.png";
import IMG4 from "../Assets/weatherApp.png";
import IMG5 from "../Assets/PersonalPortfolio.jpg";
import IMG6 from "../Assets/iwave-case.jpg";
import IMG7 from "../Assets/motohawk-sale.jpg";
import IMG8 from "../Assets/kapture-blog.png";

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
      id: 4,
      title: "Live Weather App",
      img: IMG4,
      description: "Simple Live Weather App using ReactJs",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://realtime-weather-app-seven.vercel.app/",
      github: "https://github.com/aslampersonal/realtime-weather-app",
    },
    {
      id: 5 ,
      title: "Personal Portfolio app",
      img: IMG5,
      description: "Personal Portfolio app ",
      technologies: "HTML | CSS | JavaScript | ReactJS ",
      link: "https://aslam-mohammed.vercel.app/",
      github: "https://github.com/aslampersonal/Personal-Portfolio/tree/main",
    },
  ];

  const dmCaseStudy = [
    {
      id: 1,
      title: "Event Promotion for iWave Systems @ Embedded World",
      img: IMG6,
      goal: "Increase brand visibility and booth traffic, Generate leads and engage with potential clients, Showcase products and solutions to industry professionals",
      strategy: "Pre-event marketing: Email, social media, and targeted ads, Booth design: Interactive layout, live demos, and presentations, Post-event follow-up: Lead capture and personalized outreach",
      results: "40% increase in booth traffic, 200+ high-quality leads generated, Enhanced brand recognition within the industry.",
    },
    {
      id: 2,
      title: "Online Offer Sale Campaign for Motohawk",  
      img: IMG7,
      goal: "Drive online sales and increase revenue through promotional offers, Expand customer base and increase brand awareness, Optimize campaign performance for maximum ROI.",
      strategy: "Offer creation: Developed compelling discount offers and promotions tailored to Motohawk's target audience, Multi-channel promotion: Leveraged email marketing, social media advertising, and targeted online ads to reach potential customers, Conversion optimization: Implemented A/B testing of ad creatives, landing pages, and call-to-action buttons to optimize conversion rates.",
      results: "65% increase in online sales during the promotional period, Acquisition of new customers and expansion of Motohawk's customer base, Improved campaign performance through continuous optimization and testing.",
    },
    {
      id: 3,
      title: "SEO and Content Marketing Campaign for Kapture",
      img: IMG8,
      goal: "Increase online leads and conversions for Kapture's products/services, Improve organic search visibility and website traffic, Establish Kapture as a thought leader in the industry.",
      strategy: "SEO optimization: Conducted comprehensive keyword research and on-page SEO optimization to improve website ranking and visibility in search engine results, Content creation: Developed high-quality, relevant content including blog posts, articles, and guides to address target audience needs and pain points, Content promotion: Implemented content distribution strategies including social media promotion, email newsletters, and outreach to industry influencers to amplify reach and engagement.",
      results: "Achieved a 30% increase in online leads within six months, Significant improvement in organic search rankings and website traffic, Enhanced brand authority and recognition through valuable, informative content.",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Works & Portfolio</h5>
      <h2>Web App Projects</h2>

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

      <h2>Digital Marketing Case Studies</h2>
      <div className="container portfolio__container2">
        {dmCaseStudy.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content2">
              <h3>{pro.title}</h3>
              <h4>Goal:</h4>
              <p>{pro.goal}</p>
              <h4>Strategy:</h4>
              <p>{pro.strategy}</p>
              <h4>Results:</h4>
              <p>{pro.results}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default portfolio;
