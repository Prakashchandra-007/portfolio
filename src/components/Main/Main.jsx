import React from 'react'
import InroductionSec from './Intro/InroductionSec';
import ProjectSec from './Project/ProjectSec'
import Skill from './Skills/Skill';

function Main() {
  return (
    <div className="main">
   <InroductionSec />
   <ProjectSec />
   <Skill />
    </div>
  )
}

export default Main