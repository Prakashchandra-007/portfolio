import React from "react";
import "./skills.css";
import SkillSetCell from "./SkillSetCell/SkillSetCell";
import skillsData from "./skillsData";
function Skill() {
  return (
    <div className="skill">
      <h1>Skills & Tools</h1>
      <h2>For those who know what they’re looking for..</h2>
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
