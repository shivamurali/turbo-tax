import React from 'react';
import { PiggyBank } from 'lucide-react';

interface DeductionsInfoProps {
  data: any;
  updateData: (data: any) => void;
}

const DeductionsInfo: React.FC<DeductionsInfoProps> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
    updateData({
      ...data,
      [e.target.name]: value
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <PiggyBank className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Deductions & Credits</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Itemized Deductions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mortgage Interest
              </label>
              <input
                type="number"
                name="mortgageInterest"
                value={data.mortgageInterest || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Taxes
              </label>
              <input
                type="number"
                name="propertyTaxes"
                value={data.propertyTaxes || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Charitable Contributions
              </label>
              <input
                type="number"
                name="charitableContributions"
                value={data.charitableContributions || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medical Expenses
              </label>
              <input
                type="number"
                name="medicalExpenses"
                value={data.medicalExpenses || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Credits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Child Tax Credit
              </label>
              <input
                type="number"
                name="childTaxCredit"
                value={data.childTaxCredit || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Education Credits
              </label>
              <input
                type="number"
                name="educationCredits"
                value={data.educationCredits || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeductionsInfo;