import { useState } from "react";

import { Login } from "./dialogLogin";
import { TermsAndCond } from "./dialogTerms";

export function LoginPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="login-dialog">
      {currentStep === 1 ? (
        <TermsAndCond onAgree={nextStep} />
      ) : (
        <Login onBack={prevStep} />
      )}
    </div>
  );
}

export default LoginPage;
