import React, { useState } from 'react';
import { Brain, Settings, Play, AlertCircle } from 'lucide-react';

const modelTypes = [
  { id: 'classification', name: 'Classification', description: 'Categorize data into predefined classes' },
  { id: 'regression', name: 'Regression', description: 'Predict continuous numerical values' },
  { id: 'clustering', name: 'Clustering', description: 'Group similar data points together' },
];

export default function ModelTraining() {
  const [selectedModel, setSelectedModel] = useState('');
  const [parameters, setParameters] = useState({
    learningRate: '0.001',
    epochs: '10',
    batchSize: '32',
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Train Model</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {modelTypes.map((model) => (
          <div
            key={model.id}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedModel === model.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
            onClick={() => setSelectedModel(model.id)}
          >
            <Brain className={`w-8 h-8 mb-2 ${
              selectedModel === model.id ? 'text-indigo-500' : 'text-gray-400'
            }`} />
            <h3 className="font-semibold text-gray-900 mb-1">{model.name}</h3>
            <p className="text-sm text-gray-600">{model.description}</p>
          </div>
        ))}
      </div>

      {selectedModel && (
        <>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">Model Parameters</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Learning Rate
                </label>
                <input
                  type="number"
                  value={parameters.learningRate}
                  onChange={(e) => setParameters({ ...parameters, learningRate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  step="0.001"
                  min="0.0001"
                  max="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Epochs
                </label>
                <input
                  type="number"
                  value={parameters.epochs}
                  onChange={(e) => setParameters({ ...parameters, epochs: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  min="1"
                  max="100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Batch Size
                </label>
                <input
                  type="number"
                  value={parameters.batchSize}
                  onChange={(e) => setParameters({ ...parameters, batchSize: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  min="1"
                  max="512"
                  step="1"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-yellow-600">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">Make sure your dataset is properly preprocessed</span>
            </div>
            
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              <Play className="w-5 h-5" />
              Start Training
            </button>
          </div>
        </>
      )}
    </div>
  );
}