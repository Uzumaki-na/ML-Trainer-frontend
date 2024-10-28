import React from 'react';
import { 
  Brain, 
  Upload, 
  BarChart3, 
  Network, 
  Download, 
  History, 
  MessageSquareCode, 
  HelpCircle,
  Zap 
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const menuItems = [
  { icon: Upload, label: 'Upload Dataset', id: 'upload' },
  { icon: BarChart3, label: 'Analysis', id: 'analysis' },
  { icon: Network, label: 'Train Model', id: 'train' },
  { icon: Zap, label: 'Predictions', id: 'predictions' },
  { icon: Download, label: 'Export Model', id: 'export' },
  { icon: History, label: 'History', id: 'history' },
  { icon: MessageSquareCode, label: 'Debug Assistant', id: 'debug' },
  { icon: HelpCircle, label: 'Help', id: 'help' },
];

export default function Sidebar({ onNavigate, currentView }: SidebarProps) {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-indigo-900 to-purple-900 text-white p-4 fixed left-0 top-0">
      <div 
        className="flex items-center gap-2 mb-8 px-2 cursor-pointer" 
        onClick={() => onNavigate('dashboard')}
      >
        <Brain className="w-8 h-8" />
        <h1 className="text-xl font-bold">ML Platform</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center gap-3 px-2 py-3 rounded-lg w-full text-left transition-colors ${
              currentView === item.id 
                ? 'bg-white/20' 
                : 'hover:bg-white/10'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}