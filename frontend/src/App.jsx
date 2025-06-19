import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


const App = () => {
  return (

      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/entities" element={<Entities />} />
  <Route path="/marketplace" element={<MarketPlace />} />
  <Route path="/notifications" element={<NotificationsPage />} />
  <Route path="/calendar" element={<Calendar />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/logout" />
  
  
  
  <Route path="/company/:id" element={<EntityDetails />} >
  <Route path="directors" element={<DirectorsTab />} />
  <Route path="events" element={<EventsTab />} />
  </Route>
  </Routes>

        </div>
      </div>
  );
};

export default App;
