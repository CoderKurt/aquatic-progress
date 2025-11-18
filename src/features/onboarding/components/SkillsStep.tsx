import { useState } from "react";

interface SkillsStepProps {
  skills: string[];
  addSkill: (skill: string) => void;
  removeSkill: (skill: number) => void;
}

const MAX_SKILLS = 3;

const SkillsStep = ({ skills, addSkill, removeSkill }: SkillsStepProps) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (skill: string) => {
    if (skills.length >= MAX_SKILLS) {
      return;
    }
    if (skill.length === 0) {
      return;
    }
    addSkill(skill);
    setNewSkill("");
  };

  return (
    <div>
      <h1>Skills</h1>
      <div>
        {skills.map((skill, index) => (
          <div>
            <div key={skill}>{skill}</div>
            <button onClick={() => removeSkill(index)}>Remove Skill</button>
          </div>
        ))}
      </div>
      {skills.length < MAX_SKILLS && (
        <>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ENTER") {
                e.preventDefault();
                handleAddSkill(newSkill);
              }
            }}
          />
          <button onClick={() => handleAddSkill(newSkill)}>Add Skill</button>
        </>
      )}
      <span>
        {skills.length} of {MAX_SKILLS}
      </span>
    </div>
  );
};

export default SkillsStep;
