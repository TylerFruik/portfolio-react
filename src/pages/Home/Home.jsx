import React from 'react';

const Home = () => {
  return (
    <div className='full-page'>
      <div className="banner">
        <img src="" alt="" />
        <img className="profile-picture" src="images/pfp.png" alt="Tyler Fruik's face"/>
        <h2>Updated weekly!</h2>
      </div>
      <div className="custom-container">
        <div className="segment">
          <div className="title">
            <h3>About</h3> 
            <h3>Me</h3>
          </div>
          <div className="content" id="about-me-content">
            <p>I'm Tyler Fruik, and I'm on a mission to become a skilled software developer. My educational journey includes time at UW-Madison and MATC, where I acquired a solid foundation in computer science and programming. Currently, I'm enrolled in the rigorous Software Development Bootcamp at UT-Austin, where I'm further refining my technical expertise.</p>
            <p>My career aspirations have always revolved around the corporate software development field. Over the past six years, I've passionately pursued this goal, eagerly seeking opportunities to expand my knowledge and capabilities. I believe that now, as I near the end of my training, I'm primed to unleash my full potential.</p>
            <p>One of my unique strengths is my fluency in both English and Spanish, which enables me to communicate effectively with a diverse range of colleagues and clients. This language proficiency has proven invaluable in collaborative settings and demonstrates my commitment to breaking down barriers in the tech industry.</p>
            <p>What sets me apart is my steadfast dedication to achieving greatness in this field. I've invested countless hours in learning, coding, and problem-solving, and I'm driven by a desire to contribute innovative solutions to real-world challenges. As I prepare to step into the corporate software development realm, I'm excited to apply my skills, creativity, and unwavering determination to make a meaningful impact.</p>
            <p>I look forward to connecting with like-minded professionals, forging new relationships, and collaborating on projects that push the boundaries of what technology can achieve. Join me on this exciting journey as I embark on my career in software development. Together, we can turn ambitious ideas into reality.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;