import React, { useState, useEffect } from 'react';

const portfolioApps = {
  loveStruck : {
    name : 'loveStruck',
    deployed : "https://lovestruck.onrender.com/",
    repo : 'https://github.com/devinshade/lovestruck',
    tags: []
  },
  giftPot : {
    name: 'giftPot',
    deployed : 'https://giftpot-d834bfa62933.herokuapp.com/',
    repo : 'https://github.com/TylerFruik/GiftPot',
    tags: []
  },
  lilChefs : {
    name: 'lilChefs',
    deployed : 'https://tylerfruik.github.io/lil-chefs/',
    repo : 'https://github.com/TylerFruik/lil-chefs',
    tags: []
  },
  passwordGenerator : {
    name: 'passwordGenerator',
    deployed : 'https://tylerfruik.github.io/Password-Generator/',
    repo : 'https://github.com/TylerFruik/Password-Generator',
    tags: []
  },
  socialNetworkBackendAPI : {
    name: 'socialNetworkBackendAPI',
    deployed : null,
    repo : 'https://github.com/TylerFruik/Social-Network-API',
    tags: []
  },
  workdayScheduler : {
    name: 'workdayScheduler',
    deployed : 'https://tylerfruik.github.io/Work-Day-Scheduler/',
    repo : 'https://github.com/TylerFruik/Work-Day-Scheduler',
    tags: []
  },
  frontendQuiz : {
    name: 'frontendQuiz',
    deployed : 'https://tylerfruik.github.io/Frontend-Quiz/',
    repo : 'https://github.com/TylerFruik/Frontend-Quiz',
    tags: []
  },
  logoMaker : {
    name: 'logoMaker',
    deployed : null,
    repo : 'https://github.com/TylerFruik/Logo-Generator',
    tags: []
  },
  noteTaker : {
    name: 'noteTaker',
    deployed : 'https://w11notetaker-364489c73d7e.herokuapp.com/',
    repo : 'https://github.com/TylerFruik/Note-Taking-App',
    tags: []
  },
  // project : {
  //   deployed : '',
  //   repo : '',
  //   tags: []
  // }
}

const titleDeployed = ['Deployed', 'Websites'];
const titleRepos = ['GitHub', 'Repos'];

const Portfolio = () => {

  const [ showRepoLinks, setShowRepoLinks ] = useState(false);
  const toggleDisplay = () => {
    setShowRepoLinks(prevState => !prevState);
  }

  return (
    <div className='full-page'>
      {showRepoLinks ? (
      <div className="segment">
        <div className="title">
          <h3>{titleDeployed[0]}</h3>
          <h3>{titleDeployed[1]}</h3>
          <button
            className='custom-btn p-2'
            onClick={toggleDisplay}
            >
            {showRepoLinks ? titleRepos[0] : titleDeployed[0]}
          </button>
        </div>
        <div className= "content" id="completed-projects-content">
          <div className='first-row'>
            <div className="project-links" id="featured">
              <a href={portfolioApps.loveStruck.deployed} target="_blank">
                <img src={`images/${portfolioApps.loveStruck.name}.png`} alt="Visual example of a full website created by Tyler Fruik using "/>
                <h4>Love<br/>Struck</h4>
              </a>
            </div>
            <div className="project-links" id="first-row-smaller">
              <a className="smaller-link" href={portfolioApps.giftPot.deployed} target="_blank">
                <img src={`images/${portfolioApps.giftPot.name}.png`} alt="Visual example of a full website created by Tyler Fruik using Handlebars and SQL through MVC, ORM, and OOP"/>
                <h4>Gift<br/>Pot</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.lilChefs.deployed} target="_blank">
                <img src={`images/${portfolioApps.lilChefs.name}.png`} alt="Visual example of a recipe program created by Tyler Fruik using API calls"/>
                <h4>Lil'<br/>Chefs</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.passwordGenerator.deployed} target="_blank">
                <img src={`images/${portfolioApps.passwordGenerator.name}.png`} alt="Visual example of a password generating program created by Tyler Fruik"/>
                <h4>Password<br/>Generator</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.workdayScheduler.deployed} target="_blank">
                <img src={`images/${portfolioApps.workdayScheduler.name}.png`} alt=""/>
                <h4>Workday<br/>Scheduler</h4>
              </a>
            </div>
          </div>
          <div className='second-row'>
            <div className="project-links" id="second-row-smaller">
              <a className="smaller-link" href={portfolioApps.socialNetworkBackendAPI.deployed} target="_blank">
                <img src={`images/${portfolioApps.socialNetworkBackendAPI.name}.png`} alt=""/>
                <h4>Social Network<br/>Backend API</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.logoMaker.deployed} target="_blank">
                <img src={`images/${portfolioApps.logoMaker.name}.png`} alt=""/>
                <h4>Logo<br/>Maker</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.frontendQuiz.deployed} target="_blank">
                <img src={`images/${portfolioApps.frontendQuiz.name}.png`} alt=""/>
                <h4>Frontend<br/>Quiz</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.noteTaker.deployed} target="_blank">
                <img src={`images/${portfolioApps.noteTaker.name}.png`} alt=""/>
                <h4>Note<br/>Taker</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div className="segment">
        <div className="title">
          <h3>{titleRepos[0]}</h3>
          <h3>{titleRepos[1]}</h3>
          <button
            className='custom-btn p-2'
            onClick={toggleDisplay}
            >
            {showRepoLinks ? titleRepos[0] : titleDeployed[0]}
          </button>
        </div>
        <div className= "content" id="completed-projects-content">
          <div className='first-row'>
            <div className="project-links" id="featured">
              <a href={portfolioApps.loveStruck.repo} target="_blank">
                <img src={`images/${portfolioApps.loveStruck.name}.png`} alt="Visual example of a full website created by Tyler Fruik using "/>
                <h4>Love<br/>Struck</h4>
              </a>
            </div>
            <div className="project-links" id="first-row-smaller">
              <a className="smaller-link" href={portfolioApps.giftPot.repo} target="_blank">
                <img src={`images/${portfolioApps.giftPot.name}.png`} alt="Visual example of a full website created by Tyler Fruik using Handlebars and SQL through MVC, ORM, and OOP"/>
                <h4>Gift<br/>Pot</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.lilChefs.repo} target="_blank">
                <img src={`images/${portfolioApps.lilChefs.name}.png`} alt="Visual example of a recipe program created by Tyler Fruik using API calls"/>
                <h4>Lil'<br/>Chefs</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.passwordGenerator.repo} target="_blank">
                <img src={`images/${portfolioApps.passwordGenerator.name}.png`} alt="Visual example of a password generating program created by Tyler Fruik"/>
                <h4>Password<br/>Generator</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.workdayScheduler.repo} target="_blank">
                <img src={`images/${portfolioApps.workdayScheduler.name}.png`} alt=""/>
                <h4>Workday<br/>Scheduler</h4>
              </a>
            </div>
          </div>
          <div className='second-row'>
            <div className="project-links" id="second-row-smaller">
              <a className="smaller-link" href={portfolioApps.socialNetworkBackendAPI.repo} target="_blank">
                <img src={`images/${portfolioApps.socialNetworkBackendAPI.name}.png`} alt=""/>
                <h4>Social Network<br/>Backend API</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.logoMaker.repo} target="_blank">
                <img src={`images/${portfolioApps.logoMaker.name}.png`} alt=""/>
                <h4>Logo<br/>Maker</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.frontendQuiz.repo} target="_blank">
                <img src={`images/${portfolioApps.frontendQuiz.name}.png`} alt=""/>
                <h4>Frontend<br/>Quiz</h4>
              </a>
              <a className="smaller-link" href={portfolioApps.noteTaker.repo} target="_blank">
                <img src={`images/${portfolioApps.noteTaker.name}.png`} alt=""/>
                <h4>Note<br/>Taker</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Portfolio;



// ? Included Projects
// ! W1 HTML CSS Git Challenge: Code Refactor
///// ! W2 Advanced CSS Challenge: Professional Portfolio
// * W3 JavaScript Challenge: Password Generator
// * W4 Web APIs Challenge: Code Quiz
// * W5 Third-Party APIs Challenge: Work Day Scheduler
// TODO W6 Server-Side APIs Challenge: Weather Dashboard
// * W7 Project 1
// * W8 Project 1
// ! W9 Node.js Challenge: Professional README Generator
// * W10 Object-oriented Programming Challenge: SVG Logo Maker
// * W11 Express.js Challenge: Note Taker
// ! W12 SQL Challenge: Employee Tracker
// * W13 Object-Relational Mapping (ORM) Challenge: E-commerce Back End
// TODO W14 Model-View-Controller (MVC) Challenge: Tech Blog
// * W15 Project 2
// * W16 Project 2
// ! W17 Computer Science for JavaScript Challenge: Regex Tutorial
// * W18 NoSQL Challenge: Social Network API
///// ! W19 Progressive Web Applications (PWA) Challenge: Text Editor
// * W20 React Challenge: React Portfolio
///// ! W21 MERN Challenge: Book Search Engine
///// ! W22 State Challenge: Redux Store (Extra Credit)
// * W23 Project 3
// * W24 Project 3
