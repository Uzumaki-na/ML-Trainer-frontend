import React from 'react';
import { BarChart2, PieChart, LineChart, AlertCircle } from 'lucide-react';

export default function DataAnalysis() {
  return (
    <div className="p-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-yellow-600" />
        <p className="text-yellow-700">Please upload a dataset first to begin analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="w-6 h-6 text-indigo-600" />
            <h3 className="font-semibold text-gray-900">Distribution Analysis</h3>
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Feature Importance</h3>
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <LineChart className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-gray-900">Correlation Matrix</h3>
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
      </div>
    </div>
  );
}