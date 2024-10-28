import React from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  currentView: string;
}

const viewTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  upload: 'Dataset Upload',
  analysis: 'Data Analysis',
  train: 'Model Training',
  predictions: 'Predictions',
  export: 'Export Model',
  history: 'History',
  debug: 'Debug Assistant',
  help: 'Help'
};

export default function Header({ currentView }: HeaderProps) {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white shadow-sm fixed top-0 right-0 left-64 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {viewTitles[currentView] || 'Dashboard'}
        </h2>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">{user?.name}</span>
            <button
              onClick={logout}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-red-600"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}