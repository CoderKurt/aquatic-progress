import SkillsStep from "./SkillsStep";
import SummaryStep from "./SummaryStep";
import useOnboardingStepper from "../hooks/useOnboardingStepper";
import WelcomeStep from "./WelcomeStep";
import useSkillsStepper from "../hooks/useSkillsStepper";

const Wrapper = () => {
  const { step, nextStep, previousStep } = useOnboardingStepper();
  const { skills, addSkill, removeSkill } = useSkillsStepper();

  const stepComponents = [
    <WelcomeStep key="welcome" />,
    <SkillsStep
      key="skills"
      skills={skills}
      addSkill={addSkill}
      removeSkill={removeSkill}
    />,
    <SummaryStep key="summary" skills={skills} />,
  ];

  return (
    <div>
      {stepComponents[step]} {step}
      <div>
        {step !== 0 && <button onClick={previousStep}>Previous</button>}
        {(step === 0 || (step === 1 && skills.length > 0)) && (
          <button onClick={nextStep}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Wrapper;
