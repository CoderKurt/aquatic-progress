import { useState } from "react";

const useOnboardingStepper = () => {
  const MAX_STEPS = 3;
  const MIN_STEPS = 0;
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step >= MAX_STEPS - 1) return;
    setStep(step + 1);
  };

  const previousStep = () => {
    if (step <= MIN_STEPS) return;
    setStep(step - 1);
  };

  return { step, nextStep, previousStep };
};

export default useOnboardingStepper;
