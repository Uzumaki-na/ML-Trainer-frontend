import React from 'react';
import { Upload, BarChart2, Brain, Zap } from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: string) => void;
}

const features = [
  {
    icon: Upload,
    title: 'Dataset Upload',
    description: 'Upload and analyze your datasets with advanced visualization tools',
    color: 'from-blue-500 to-cyan-400',
    route: 'upload'
  },
  {
    icon: BarChart2,
    title: 'Data Analysis',
    description: 'Get instant insights with automated data analysis and visualization',
    color: 'from-purple-500 to-pink-400',
    route: 'analysis'
  },
  {
    icon: Brain,
    title: 'Model Training',
    description: 'Train custom ML models with an intuitive interface',
    color: 'from-orange-500 to-yellow-400',
    route: 'train'
  },
  {
    icon: Zap,
    title: 'Real-time Predictions',
    description: 'Make predictions and evaluate model performance instantly',
    color: 'from-green-500 to-emerald-400',
    route: 'predictions'
  },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to ML Platform
          </h1>
          <p className="text-xl text-gray-600">
            Build, train, and deploy machine learning models with ease
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <button
              key={feature.title}
              onClick={() => onNavigate(feature.route)}
              className="text-left bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </button>
          ))}
        </div>

        <section className="mt-12 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Start Your ML Journey Today
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Upload your dataset and let our platform guide you through the process of building
              powerful machine learning models.
            </p>
            <button 
              onClick={() => onNavigate('upload')}
              className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}