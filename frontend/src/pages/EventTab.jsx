import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyContext } from '../context/CompanyContext';

const EventsTab = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });
  const {companyList} = useContext(CompanyContext)

 useEffect(() => {
  const selected = companyList.find((c) => c._id === id);
  setCompany(selected);
}, [id, companyList]);


 const handleDelete = (index) => {
  const eventToDelete = company.events[index];
  const confirmDelete = window.confirm(`Are you sure you want to delete the event: "${eventToDelete.title}"?`);

  if (confirmDelete) {
    const updatedEvents = company.events.filter((_, i) => i !== index);
    setCompany({ ...company, events: updatedEvents });
  }
};

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.description) return;
    setCompany({
      ...company,
      events: [...company.events, newEvent]
    });
    setNewEvent({ title: '', date: '', description: '' });
  };

  if (!company) return <div className="text-gray-600 p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{company.name}</h2>
      <p className="text-gray-600 mb-6">{company.about}</p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Verification Events</h3>
        <div className="space-y-4">
          {company.events.map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4 hover:shadow-sm transition">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">{event.title}</h4>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Add New Event</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
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
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            className="sm:col-span-2 border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-gray-400"
          ></textarea>
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
