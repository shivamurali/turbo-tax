import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, DollarSign, Briefcase, Home, Users, PiggyBank, CheckCircle } from 'lucide-react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import PersonalInfo from './components/steps/PersonalInfo';
import IncomeInfo from './components/steps/IncomeInfo';
import DeductionsInfo from './components/steps/DeductionsInfo';
import DependentsInfo from './components/steps/DependentsInfo';
import Summary from './components/steps/Summary';

const steps = ['Personal', 'Income', 'Deductions', 'Dependents', 'Summary'];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {},
    income: {},
    deductions: {},
    dependents: []
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
      window.scrollTo(0, 0);
    }
  };

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo data={formData.personal} updateData={(data) => updateFormData('personal', data)} />;
      case 1:
        return <IncomeInfo data={formData.income} updateData={(data) => updateFormData('income', data)} />;
      case 2:
        return <DeductionsInfo data={formData.deductions} updateData={(data) => updateFormData('deductions', data)} />;
      case 3:
        return <DependentsInfo data={formData.dependents} updateData={(data) => updateFormData('dependents', data)} />;
      case 4:
        return <Summary formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <ProgressBar steps={steps} currentStep={currentStep} />
        
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 min-h-[60vh]">
          {renderStep()}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors
              ${currentStep === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <button
            onClick={handleNext}
            className="flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Continue'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;