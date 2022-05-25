import React from 'react';
import heroMain from '../../Assets/home-main.svg';
import './home.css';
import resume from '../../Assets/Resume/Mayur-Arde-Full-Stack.pdf';
function Home() {
  return (
    <>
      <section className="home">
        <div className="hero-section">
          <div className="hero-content">
            <div className="intro-info">
              <h1 className="heading">Hey There!</h1>
              <h1 className="main-heading">
                I'm <strong className="name"> Mayur Arde</strong>
              </h1>
              <h2>Full Stack Web Developer</h2>
              <a href={resume} className="btn resume-btn" target="_blank" rel="noreferrer">
              Resume
              </a>
            </div>
            <img src={heroMain} alt="" className="hero-img" />
          </div>
        </div>
        {/* <Home2 /> */}
      </section>
    </>
  );
}

export default Home;
