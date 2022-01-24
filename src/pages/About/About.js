import React from 'react';
import AboutCard from './AboutCard';
import Skills from './Skills';
import Tools from './Tools';
import Github from './Github';
import './about.css';

function About() {
  return (
    <>
      <div className="container">
        <AboutCard />
        <Skills />
        <Tools />
        <Github />
      </div>
    </>
  );
}

export default About;
