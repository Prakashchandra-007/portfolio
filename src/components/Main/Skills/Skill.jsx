import React from "react";
import "./skills.css";
import SkillSetCell from "./SkillSetCell/SkillSetCell";
import skillsData from "./skillsData";
import SubHeading from '../SubHeadings/subHeading';
import SubPara from '../SubHeadings/SubPara';
function Skill() {
  return (
    <div className="skill">
      <SubHeading>Skills & Tools</SubHeading>
      <SubPara>For those who know what they’re looking for..</SubPara>
      <div className="skill-area">
        
        {/* rendering all skills list  */}
        {skillsData &&
          skillsData.map((items) => {
            return <SkillSetCell>{items.skillName}</SkillSetCell>;
          })}
      </div>
    </div>
  );
}

export default Skill;
