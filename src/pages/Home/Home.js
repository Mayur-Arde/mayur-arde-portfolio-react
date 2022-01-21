import React from 'react';
import Tilt from 'react-parallax-tilt';
import avatar from '../../Assets/avatar.svg';
import heroMain from '../../Assets/home-main.svg';
import wave from '../../Assets/wave.svg';
import './home.css';

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
            </div>
            <img src={heroMain} alt="" className="hero-img" />
            {/* <div className="wave">
              <img src={wave} alt="" />
            </div> */}
          </div>
        </div>
        {/* <Home2 /> */}
      </section>
    </>
  );
}

export default Home;
