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
              <a className="smaller-link" href="#">
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
              <a className="smaller-link" href="https://tylerfruik.github.io/Challenge-Week1/" target="_blank">
                <img src="./public/images/Formatted Website PNG.png" alt="Visual example of a website created by Tyler Fruik"/>
                <h4>Refactored<br/>Website</h4>
              </a>
            </div>
          </div>
          <div className='second-row'>
            <div className="project-links" id="second-row-smaller">
              <a className="smaller-link" href="#">
                <img src="./public/images/Coming Soon.png" alt=""/>
                <h4>Coming<br/>Soon</h4>
              </a>
              <a className="smaller-link" href="https://tylerfruik.github.io/lil-chefs/" target="_blank">
              <img src="./public/images/Coming Soon.png" alt=""/>
              <h4>Coming<br/>Soon</h4>
              </a>
              <a className="smaller-link" href="https://tylerfruik.github.io/Password-Generator/" target="_blank">
              <img src="./public/images/Coming Soon.png" alt=""/>
              <h4>Coming<br/>Soon</h4>
              </a>
              <a className="smaller-link" href="https://tylerfruik.github.io/Challenge-Week1/" target="_blank">
                <img src="./public/images/Coming Soon.png" alt=""/>
                <h4>Coming<br/>Soon</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;