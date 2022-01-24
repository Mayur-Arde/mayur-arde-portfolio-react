import React from 'react';
import {tools} from './skillsdata';
function Tools() {
  return <>
  <div className="box-container">
      <h2 className="box-heading">Tools</h2>
      <div className="box-content">
        {tools.map((tool, index) => {
          return <div className="box-card" key={index}>
              <tool.icon className="box-icon"/>
          </div>
        })}
      </div>
    </div>
  </>
}
export default Tools;
