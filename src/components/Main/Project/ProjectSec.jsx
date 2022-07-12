import React from 'react';
import ProjectsCard from './ProjectCards/ProjectsCard';
import Button from '../../Button/Button';
import './project.css';
function ProjectSec() {
  return (
    <div className="project-div">
        <h1>Projects</h1>
        <p>Prototypes, Digital Products (Apps, Websites, SaaS solutions) and design systems which are visually pleasing, user-centric and easy to use.</p>
        <div className='project-card-area'>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
    
        </div>
      <Button name="More.." color="#fff" bcolor="blue" />
    </div>
  )
}

export default ProjectSec