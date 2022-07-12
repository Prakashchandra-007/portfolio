import React from "react";
import Button from "../../Button/Button";
import HeroImg from '../HeroImg/HeroImg';
import './intro.css';
function InroductionSec() {
  return (
    <div className='intro-sec'>
      <div id='intro-name' className='intro-text'><h1>Hi there , I'm Prakash 👋</h1>
      <h1 id='intro-role'>UX/UI Designer & Front-end developer </h1>
      <p id='intro-desc'>
        I help people and brands reach their goals by designing & building
        user-centric digital products and interactive experiences
      </p>
      <span><Button name="View my work" color="white" bcolor="blue" />
      <Button name="More about me" color="blue" bcolor="white" /></span>
      </div>
      <HeroImg />
    </div>
  );
}

export default InroductionSec;
