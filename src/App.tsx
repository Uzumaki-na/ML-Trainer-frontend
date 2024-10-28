import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DatasetUpload from './components/features/DatasetUpload';
import ModelTraining from './components/features/ModelTraining';
import DataAnalysis from './components/features/DataAnalysis';
import Predictions from './components/features/Predictions';
import AuthModal from './components/auth/AuthModal';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = React.useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'upload':
        return <DatasetUpload />;
      case 'analysis':
        return <DataAnalysis />;
      case 'train':
        return <ModelTraining />;
      case 'predictions':
        return <Predictions />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthenticated && <AuthModal />}
      {isAuthenticated && (
        <>
          <Sidebar onNavigate={setCurrentView} currentView={currentView} />
          <Header currentView={currentView} />
          <main className="ml-64 pt-16">
            {renderContent()}
          </main>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;