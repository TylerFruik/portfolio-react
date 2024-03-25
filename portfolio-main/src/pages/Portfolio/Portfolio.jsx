import React from 'react';

const Portfolio = () => {
  return (
    <div className='full-page'>
      <div className="segment">
        <div className="title">
          <h3>Portfolio</h3>
          <h3>Projects</h3>
        </div>
        <div className= "content" id="completed-projects-content">
          <div className='first-row'>
            <div className="project-links" id="featured">
              <a href="https://lovestruck.onrender.com/" target="_blank">
                <img src="./public/images/LoveStruck.png" alt="Visual example of a full website created by Tyler Fruik using "/>
                <h4>Love<br/>Struck</h4>
              </a>
            </div>
            <div className="project-links" id="first-row-smaller">
              <a className="smaller-link" href="https://giftpot-d834bfa62933.herokuapp.com/">
                <img src="./public/images/GiftpotDemo.png" alt="Visual example of a full website created by Tyler Fruik using Handlebars and SQL through MVC, ORM, and OOP"/>
                <h4>Gift<br/>Pot</h4>
              </a>
              <a className="smaller-link" href="https://tylerfruik.github.io/lil-chefs/" target="_blank">
                <img src="./public/images/Lil-Chefs-Mockup.png" alt="Visual example of a recipe program created by Tyler Fruik using API calls"/>
                <h4>Lil'<br/>Chefs</h4>
              </a>
              <a className="smaller-link" href="https://tylerfruik.github.io/Password-Generator/" target="_blank">
                <img src="./public/images/Password Generator PNG.png" alt="Visual example of a password generating program created by Tyler Fruik"/>
                <h4>Password<br/>Generator</h4>
              </a>
              <a className="smaller-link" href="https://github.com/TylerFruik/Social-Network-API" target="_blank">
                <img src="./public/images/ECommerce.png" alt=""/>
                <h4>Social Network<br/>Backend API</h4>
              </a>
            </div>
          </div>
          <div className='second-row'>
            <div className="project-links" id="second-row-smaller">
              <a className="smaller-link" href="https://tylerfruik.github.io/Work-Day-Scheduler/" target="_blank">
                <img src="./public/images/WorkdayScheduler.png" alt=""/>
                <h4>Workday<br/>Scheduler</h4>
              </a>
              <a className="smaller-link" href="https://tylerfruik.github.io/Frontend-Quiz/" target="_blank">
                <img src="./public/images/FrontendQuiz.png" alt=""/>
                <h4>Frontend<br/>Quiz</h4>
              </a>
              <a className="smaller-link" href="https://github.com/TylerFruik/Logo-Generator/tree/main" target="_blank">
                <img src="./public/images/LogoMaker.png" alt=""/>
                <h4>Logo<br/>Maker</h4>
              </a>
              <a className="smaller-link" href="https://w11notetaker-364489c73d7e.herokuapp.com/" target="_blank">
                <img src="./public/images/NoteTakingApp.png" alt=""/>
                <h4>Note<br/>Taker</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
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
