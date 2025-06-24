import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import AnalyticsDashboardPage from './pages/AnalyticsDashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
        <Route path="/" element={<AnalyticsDashboardPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;