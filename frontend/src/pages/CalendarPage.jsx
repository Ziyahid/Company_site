import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCompany, setSelectedCompany] = useState('All');

  const companies = [
    {
      _id: '1',
      name: 'Alpha Corp',
      events: [
        { date: '2025-06-20', service: 'Audit', event: 'Internal Audit' },
        { date: '2025-06-23', service: 'Tax', event: 'Tax Filing' },
      ],
    },
    {
      _id: '2',
      name: 'Beta Ltd',
      events: [
        { date: '2025-06-20', service: 'Compliance', event: 'Annual Review' },
      ],
    },
    {
      _id: '3',
      name: 'Gamma Inc',
      events: [
        { date: '2025-06-25', service: 'Legal', event: 'Contract Signing' },
      ],
    },
  ];

  const formattedSelectedDate = format(selectedDate, 'yyyy-MM-dd');

  const filteredCompanies =
    selectedCompany === 'All'
      ? companies
      : companies.filter((c) => c.name === selectedCompany);

  const eventsOnDate = filteredCompanies.flatMap((company) =>
    company.events
      .filter((event) => event.date === formattedSelectedDate)
      .map((event) => ({ ...event, companyName: company.name }))
  );

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Company Calendar</h1>

      <div className="mb-6">
        <label className="block mb-3 text-lg text-gray-700 font-semibold">
          Filter by Company:
        </label>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="border border-gray-300 rounded-lg px-5 py-3 text-lg w-full md:w-1/2 shadow-sm"
        >
          <option value="All">All</option>
          {companies.map((company) => (
            <option key={company._id} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 shadow-lg rounded-xl border">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="w-full"
            tileClassName="text-lg"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Events on {format(selectedDate, 'MMMM dd, yyyy')}:
          </h2>
          {eventsOnDate.length === 0 ? (
            <p className="text-gray-500 text-lg">No events found.</p>
          ) : (
            <ul className="space-y-5">
              {eventsOnDate.map((event, index) => (
                <li
                  key={index}
                  className="bg-white shadow-md p-6 rounded-xl border-l-8 border-blue-500"
                >
                  <p className="text-xl font-bold text-gray-900">
                    {event.companyName}
                  </p>
                  <p className="text-gray-700 text-lg mt-2">
                    <span className="font-medium">Service:</span> {event.service}
                  </p>
                  <p className="text-gray-700 text-lg">
                    <span className="font-medium">Event:</span> {event.event}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
