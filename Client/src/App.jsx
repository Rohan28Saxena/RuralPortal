import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Grants from './pages/Grants';
import Mentors from './pages/Mentors';
import LearningHub from './pages/LearningHub';
import Auth from './pages/Auth'; 

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // ADD: User state
  const [activeTab, setActiveTab] = useState('dashboard'); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user'); // Fetch stored user
    
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('token', 'dummy_auth_token_123');
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Clear user data
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isLoading) return <div className="min-h-screen bg-[#fdfbf7]"></div>;

  if (!isAuthenticated) {
    // Pass handleLogin to Auth
    return <Auth onLogin={handleLogin} />; 
  }

  return (
    <Navigation 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      onLogout={handleLogout}
      user={user} // Pass user to Navigation
    >
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'grants' && <Grants />}
      {activeTab === 'mentors' && <Mentors />}
      {activeTab === 'learning' && <LearningHub />}
    </Navigation>
  );
}