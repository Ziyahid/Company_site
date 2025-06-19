import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Entities from './pages/Entities';
import MarketPlace from './pages/MarketPlace';
import Calendar from './pages/CalendarPage';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import EntityDetails from './pages/EntityDetails';
import EventsTab from './pages/EventTab';
import DirectorsTab from './pages/DirectorTab';
import NotificationsPage from './pages/NotificationsPage';
import { FiMenu } from 'react-icons/fi';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 p-6 md:ml-34">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/entities" element={<Entities />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" />
          <Route path="/company/:id" element={<EntityDetails />}>
            <Route path="directors" element={<DirectorsTab />} />
            <Route path="events" element={<EventsTab />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
