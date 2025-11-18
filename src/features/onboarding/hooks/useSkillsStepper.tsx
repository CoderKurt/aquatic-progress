import { useState } from "react";

const useSkillsStepper = () => {
  const [skills, setSkills] = useState<string[]>([]);

  const addSkill = (skill: string) => {
    setSkills([...skills, skill]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return { skills, addSkill, removeSkill };
};

export default useSkillsStepper;
