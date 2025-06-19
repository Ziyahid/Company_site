import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyContext } from '../context/CompanyContext';
import axios from 'axios';

const EventsTab = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });
  
  const contextValue = useContext(CompanyContext);
  
  if (!contextValue) {
    console.error('CompanyContext not found');
    return <div className="text-red-600 p-6">Error: Company context not available</div>;
  }
  
  const { companyList, setCompanyList } = contextValue;

  // Load specific company
  useEffect(() => {
    if (companyList && companyList.length > 0) {
      const selected = companyList.find((c) => c._id === id);
      setCompany(selected);
    }
  }, [id, companyList]);

  // DELETE EVENT
  const handleDelete = async (eventId) => {
    const eventToDelete = company.events.find((e) => e._id === eventId);
    const confirmDelete = window.confirm(`Are you sure you want to delete the event: "${eventToDelete?.title}"?`);

    if (confirmDelete) {
      try {
        // ✅ FIXED: Use localhost:5000 instead of localhost:5173
        const url = `http://localhost:5000/api/companies/${company._id}/events/${eventId}`;
        console.log('DELETE URL:', url);
        
        const response = await axios.delete(url);
        console.log('Delete response:', response.data);
        
        const updatedEvents = company.events.filter((e) => e._id !== eventId);
        setCompany({ ...company, events: updatedEvents });

        if (setCompanyList && typeof setCompanyList === 'function') {
          const updatedCompanyList = companyList.map(c =>
            c._id === company._id ? { ...c, events: updatedEvents } : c
          );
          setCompanyList(updatedCompanyList);
        }
        
      } catch (err) {
        console.error('Delete request failed:', err);
        alert(`Error deleting event: ${err.response?.data?.message || err.message}`);
      }
    }
  };

  // ADD EVENT
  const handleAddEvent = async () => {
    if (!newEvent.title?.trim() || !newEvent.date || !newEvent.description?.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // ✅ FIXED: Use localhost:5000 instead of localhost:5173
      const url = `http://localhost:5000/api/companies/${company._id}/events`;
      console.log('POST URL:', url);
      console.log('Event data:', newEvent);
      
      const response = await axios.post(url, {
        title: newEvent.title.trim(),
        date: newEvent.date,
        description: newEvent.description.trim()
      });
      
      console.log('Add event response:', response.data);
      
      const updatedEvents = [...company.events, response.data];
      setCompany({ ...company, events: updatedEvents });

      if (setCompanyList && typeof setCompanyList === 'function') {
        const updatedCompanyList = companyList.map(c =>
          c._id === company._id ? { ...c, events: updatedEvents } : c
        );
        setCompanyList(updatedCompanyList);
      }
      
      setNewEvent({ title: '', date: '', description: '' });
      
    } catch (err) {
      console.error('Failed to add event:', err);
      console.error('Error response:', err.response?.data);
      alert(`Error adding event: ${err.response?.data?.message || err.message}`);
    }
  };

  if (!company) {
    return <div className="text-gray-600 p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{company.name}</h2>
      <p className="text-gray-600 mb-6">{company.about}</p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Verification Events</h3>
        <div className="space-y-4">
          {company.events && company.events.length > 0 ? (
            company.events.map((event) => (
              <div key={event._id} className="border border-gray-200 rounded-md p-4 hover:shadow-sm transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No events yet. Add one below!</p>
          )}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Add New Event</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <textarea
            placeholder="Event Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            className="sm:col-span-2 border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default EventsTab;