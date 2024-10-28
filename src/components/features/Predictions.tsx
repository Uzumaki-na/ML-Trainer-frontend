import React from 'react';
import { Brain, AlertCircle } from 'lucide-react';

export default function Predictions() {
  return (
    <div className="p-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-yellow-600" />
        <p className="text-yellow-700">Please train a model first to make predictions</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-6 h-6 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-900">Make Predictions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Input Features</h4>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
              <p className="text-gray-500">No model available</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Prediction Results</h4>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
              <p className="text-gray-500">No predictions yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}