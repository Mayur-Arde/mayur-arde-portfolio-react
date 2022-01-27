import React from 'react';
import Tilt from 'react-parallax-tilt';

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
            I am currently Learning Node js and MongoDb Full Stack.
            </p>
  
            <p className="card-text">Apart from coding, some other activities that I love to do!</p>
            <ul>
              <li>🟣 Play Pc Gaming, especially with friends.</li>
              <li>🟣 Finance learning to start Investing.</li>
            </ul>
          </div>
          <Tilt>
          <img
            src="https://www.soumya-jit.tech/static/media/about.aee0f771.png"
            alt=""
            className="about-img"
          />
          </Tilt>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
