import React from 'react';
import {skills} from './skillsdata';


function Skills() {
  return <>
    <div className="box-container">
      <h2 className="box-heading">Skills</h2>
      <div className="box-content">
        {skills.map((skill, index) => {
          return <div className="box-card" key={index}>
              <skill.icon className="box-icon"/>
          </div>
        })}
      </div>
    </div>
  </>
}

export default Skills;
