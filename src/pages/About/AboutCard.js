import React from 'react';

function AboutCard() {
  return (
    <>
      <div className="container-card">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">About</h2>
            <p className="card-text">
              Hi Everyone, I am <span>Mayur Arde</span> from Mumbai, India. 
              I am a <span>Web Developer </span>
              with a passion for building beautiful and responsive
              websites.
            </p>
            <p className="card-text">
              I have a strong understanding of the <span>React</span> and have
              worked on multiple projects.
            </p> 
            <p className="card-text">
            I am currently Learn MERN Full Stack.
            </p>
  
            <p className="card-text">Apart from coding, some other activities that I love to do!</p>
            <ul>
              <li>🟣 Play Pc Gaming, especially with friends.</li>
              <li>🟣 Finance learing to start Investing.</li>
            </ul>
          </div>
          <img
            src="https://www.soumya-jit.tech/static/media/about.aee0f771.png"
            alt=""
            className="about-img"
          />
        </div>
      </div>
    </>
  );
}

export default AboutCard;
