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
            <p>I'm Tyler Fruik, a Free-Lance Web Developer, Live Broadcaster, 3d Model Artist, Audio Coach/Consultant, and Voice Over Artist. I recieved my education through the UT-Austin Full-Stack Web Development Bootcamp in which I earned the awards for "Best Front-End Developer" as well as "Best Single Day Programmer" graduating in March of 2024 as well as several courses through the University of Wisconsin-Madison and Madison Area Technical College.</p>
            <p>In the months since my graduation, I have been diligently seeking out full time employment in web development. Be it front or back end, I have been ensuring my skils remain sharpened through commissions for custom web applications or homepages for various Austin based organizations. While the majority of my work in recent months has been independent, the greatest fulfilment through development has always been found alongside a team of peers. Every time, collaboration has served as the greatest springboard for inspiration while offering endless opportunities to grow each other's skills.</p>
            <p>While I continue my hunt for the best avenue to launch my career, I will be updating/adding projects found in the portfolio section at the top of the page. Feel free to check them out! There are provided links to the deployed applications as well as the GitHub repositories. Additionally, while there are several common developer questions below, feel free to contact me at any of the links provided in the footer of each page.</p>
          </div>
        </div>
        <div className="segment">
          <div className="title">
            <h3>Get to</h3>
            <h3>Know</h3>
            <h3>a Dev</h3>
          </div>
          <div className="content" id="about-me-content">
            <div className="question">
              <h4>What motivated me to become a web developer?</h4>
              <p>I’ve always wanted to stage my career in the tech field. No other field is as constantly evolving and has such opportunity for innovation. As for web development in particular, when I began my computer science education, I learned the programming fundamentals through Java and Python. From the start I was intrigued by the ability to accomplish similar results through different languages. As I began to learn the three core languages of web development, I was impressed by the synergy offered despite vastly different syntax. Through my early projects, I found that this varied syntax provides great assistance in splitting up the functions of each piece of the program, organizing code flow, and making imports simple to understand. Additionally, I enjoy web development as it is one of the fastest ways to allow users to engage with the products I create.</p>
            </div>
            <div className="question">
              <h4>What makes me stand out from other web developers?</h4>
              <p>Most significantly, my pursuit of a career in web development has taken a non-traditional path. Having lived alongside many friends (my fiancé included) with successful careers as software engineers, I was privy to a fair amount of tech-talk for years. Then I learned web development. In doing so, I had context for how my education would apply to the present field. I was also able to fluidly adapt to my bootcamp’s structure which held Agile Methodologies at the core of its curriculum. An additional way I stand out, is that over the last five years I have balanced my pursuit of a career in the tech industry with entertainment work, specifically live broadcasting on Twitch. My desire to create an experience both visually and auditorily unique necessitated a clear understanding of file type conversions. Be it images, videos, or sound effects, knowing the proper use case for a specific file format was crucial for maintaining a clean, interruption-free broadcast. Additionally, being restricted to a 16:9 visual space taught the fundamentals of z-indexing, UX/UI design, and smooth transition effects. Time and time again, my work in broadcasting has proven to be a directly transferable skill set.</p>
            </div>
            <div className="question">
              <h4>What is my daily routine as a web developer?</h4>
              <p>My developer projects right now are divided between smaller contract jobs and personal projects. Therefore, if I have a project with a client’s deadline, I will first devote my time to its completion. When I am working with more freedom, I will commonly be working on one of a handful of side projects while watching YouTube videos going over tips and tricks, new innovations in the field, or replaying recordings of past lectures when stumped on a particular subject. Recently, my core project has been updating my developer portfolio. When I need a break, I turn to one of four other options: Testing the limits of CSS, refactoring old projects, finding interesting public APIs to add to my personal homepage, or creating custom browser sources for live streaming.</p>
            </div>
            <div className="question">
              <h4>What is my remote work experience?</h4>
              <p>All of my developer experience is remote. From education to production, I have built every program from my at-home setup and interfaced with other team members through Slack, Zoom, Discord, and Github. I thoroughly enjoy working remotely and am able to communicate and collaborate with ease.</p>
            </div>
            <div className="question">
              <h4>How do I approach collaborating with designers and other developers on a project?</h4>
              <p>First off, I would ensure that each team member, regardless of background, is on the same page. This would entail breaking complex technical concepts down into terms understood by all. From there, work together to identify the project’s components and sort them by priority. As development progresses, I would make certain to remain in constant contact with the team.</p>
            </div>
            <div className="question">
              <h4>What was a recent web development difficulty I faced and how did I work to overcome it?</h4>
              <p>During my web development bootcamp, our final project was a full-stack application harboring a workload designed for five developers to divide evenly. This allowed each of us to focus on a particular aspect of the project highlighting our individual strengths. Our project was to create a user-focused website using the MERN Stack (MongoDB, Express.js, React, Node.js) with a scalable backend. The project was required to “fulfill a real-world need, with a focus on data and user demand.” We decided to make a wedding planning website through which a user can handle all invites and fundraise using Stripe. My chosen task was facilitating the site’s front-end. As half of the allotted time passed, three of the five suddenly dropped from the project having begun none of their components. As this was the final requirement for graduation, we were left with no time to waste. In one week, my remaining partner and I successfully incorporated Stripe, BCrypt, GraphQL, built our database using MongoDB and the Mongoose ODM, and ensured cross-browser compatibility all while keeping the code up to W3C standards. This crunch time led to me winning the “Best Single Day Programmer” award in our graduation ceremony. While the necessary work load of that week could have been overwhelming given the clear ramifications upon coming up short, I was delighted to have an excuse to write code for 80 hours</p>
            </div>
            <div className="question">
              <h4>How do I ensure that my code is accessible to users with disabilities?</h4>
              <p>For each website I have created, I follow the Web Content Accessibility Guidelines (WCAG) documents. These practices are commonplace across all of web development and were a crucial aspect of my education. A key parameter is ensuring that any non-text component of a website has a text correlate. For example, providing alt text when creating an img element.  Another important strategy is properly formatting HTML. Not only does this assist other developers, but it is required for many screen readers to correctly interpret the content of a page.</p>
            </div>
            <div className="question">
              <h4>When I build a web application, how do I optimize its performance?</h4>
              <p>Lately, I have been updating outdated projects to be React compatible. The reusable components and virtual DOM not only lessen the website’s stress on the server, but also provide a more efficient and scalable code flow. Additionally, though a simple change, many of the refactoring projects I have worked on use “var” in variable declarations rather than the standard “let” or “const.” By changing these, the website is less susceptible to bugs or data complications. Finally, ensuring that data is fetched only when needed, for example when a div enters the view port through scrolling improves site performance on devices with fewer resources.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;