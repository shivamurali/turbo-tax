import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SummaryProps {
  formData: any;
}

const Summary: React.FC<SummaryProps> = ({ formData }) => {
  const calculateTotalIncome = () => {
    const wages = parseFloat(formData.income?.wages) || 0;
    const investmentIncome = parseFloat(formData.income?.investmentIncome) || 0;
    const selfEmploymentIncome = parseFloat(formData.income?.selfEmploymentIncome) || 0;
    return wages + investmentIncome + selfEmploymentIncome;
  };

  const calculateTotalDeductions = () => {
    const mortgageInterest = parseFloat(formData.deductions?.mortgageInterest) || 0;
    const propertyTaxes = parseFloat(formData.deductions?.propertyTaxes) || 0;
    const charitableContributions = parseFloat(formData.deductions?.charitableContributions) || 0;
    const medicalExpenses = parseFloat(formData.deductions?.medicalExpenses) || 0;
    return mortgageInterest + propertyTaxes + charitableContributions + medicalExpenses;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <CheckCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Tax Return Summary</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium">{formData.personal?.firstName} {formData.personal?.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">SSN</p>
              <p className="font-medium">{formData.personal?.ssn}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-medium">
                {formData.personal?.address}, {formData.personal?.city}, {formData.personal?.state}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Income Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Income</span>
              <span className="font-medium">${calculateTotalIncome().toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Deductions</span>
              <span className="font-medium">${calculateTotalDeductions().toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center font-semibold text-lg pt-4 border-t">
              <span>Taxable Income</span>
              <span>${(calculateTotalIncome() - calculateTotalDeductions()).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dependents</h3>
          {formData.dependents && formData.dependents.length > 0 ? (
            <div className="space-y-4">
              {formData.dependents.map((dependent: any) => (
                <div key={dependent.id} className="flex justify-between items-center">
                  <span className="text-gray-600">
                    {dependent.firstName} {dependent.lastName} ({dependent.relationship})
                  </span>
                  <span className="font-medium text-gray-900">SSN: {dependent.ssn}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No dependents added</p>
          )}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Estimated Tax Liability</h3>
              <p className="text-sm text-blue-600 mt-1">Based on provided information</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-900">
                ${Math.max(0, Math.round((calculateTotalIncome() - calculateTotalDeductions()) * 0.22)).toLocaleString()}
              </div>
              <p className="text-sm text-blue-600">Estimated Total</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;