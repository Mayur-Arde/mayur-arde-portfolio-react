import React from 'react';
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I Code
      </h2>
      <GitHubCalendar
        username="Mayur-Arde"
        blockSize={15}
        blockMargin={7}
      />
    </div>
  );
}

export default Github;
