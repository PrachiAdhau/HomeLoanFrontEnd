import React, { useState } from 'react';
import StepOne from './StepOne';
import PermantAddress from './PermantAddress';
//import StepTwo from './StepTwo'; // Import StepTwo if it exists

function CustomerAddress() {
  const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      localAddress: "",
    });

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    return (
      <div className="form-container">
        
        {/* Render StepOne or StepTwo based on currentStep */}
        {currentStep === 1 && (
          <StepOne nextStep={nextStep} formData={formData} handleChange={handleChange} />
        )}

         {currentStep === 2 && (
          <PermantAddress nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />
        )} 
      </div>
    );
  };

  return <MultiStepForm />;
}

export default CustomerAddress;
