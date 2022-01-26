import React from 'react'
import projectData from './projectsData'
import './projects.css';
function Projects() {
  return (
    <section className='projects'>
      <h2>All Projects</h2>
      <article className='projects-list'>
      {projectData.map(project => (
        <div className='project' key={project.id}>
          <img src={project.imgage} alt={project.title} className='project-img' />
          <div className="project info">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          <div className="project-links">
            <a href={project.link} target='_blank' rel='noreferrer' className='live-btn btn'>
              preview live
            </a>
            <a href={project.github} target='_blank' rel='noreferrer' className='github-btn btn'>
              view code
            </a>
          </div>
          </div>
        </div>
      ))}
      </article>
      </section>
  )
}

export default Projects
