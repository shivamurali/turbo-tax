import React from 'react';
import { Users, Plus, Trash2 } from 'lucide-react';

interface DependentsInfoProps {
  data: any[];
  updateData: (data: any[]) => void;
}

const DependentsInfo: React.FC<DependentsInfoProps> = ({ data, updateData }) => {
  const handleAddDependent = () => {
    updateData([...data, { id: Date.now() }]);
  };

  const handleRemoveDependent = (id: number) => {
    updateData(data.filter(dep => dep.id !== id));
  };

  const handleChange = (id: number, field: string, value: string) => {
    updateData(
      data.map(dep =>
        dep.id === id ? { ...dep, [field]: value } : dep
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Dependents Information</h2>
      </div>

      <div className="space-y-6">
        {data.map((dependent, index) => (
          <div key={dependent.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Dependent #{index + 1}
              </h3>
              <button
                onClick={() => handleRemoveDependent(dependent.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={dependent.firstName || ''}
                  onChange={(e) => handleChange(dependent.id, 'firstName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={dependent.lastName || ''}
                  onChange={(e) => handleChange(dependent.id, 'lastName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Social Security Number
                </label>
                <input
                  type="text"
                  value={dependent.ssn || ''}
                  onChange={(e) => handleChange(dependent.id, 'ssn', e.target.value)}
                  placeholder="XXX-XX-XXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dependent.dob || ''}
                  onChange={(e) => handleChange(dependent.id, 'dob', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship
                </label>
                <select
                  value={dependent.relationship || ''}
                  onChange={(e) => handleChange(dependent.id, 'relationship', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select relationship</option>
                  <option value="child">Child</option>
                  <option value="stepchild">Stepchild</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={handleAddDependent}
          className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Dependent
        </button>
      </div>
    </div>
  );
};

export default DependentsInfo;