import React, { useEffect, useState } from 'react';
import { FaBuilding, FaCheckCircle, FaClock, FaHourglassStart } from 'react-icons/fa';
import companyData from '../data/companyData'; // Rename this import to avoid conflict

const statusIcon = {
  "Completed": <FaCheckCircle className="text-green-500 inline-block mr-1" />,
  "In Progress": <FaClock className="text-yellow-500 inline-block mr-1" />,
  "Not Started": <FaHourglassStart className="text-gray-500 inline-block mr-1" />
};

const statusColor = {
  "Completed": "text-green-600",
  "In Progress": "text-yellow-500",
  "Not Started": "text-gray-600"
};

const Dashboard = () => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    
    setCompanyList(companyData);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>
      {companyList.map((company, index) => (
        <div
          key={index}
          className="border rounded-lg p-6 shadow-md bg-white transition duration-300 transform hover:shadow-xl hover:scale-[1.01]"
        >
          <div className="flex items-center space-x-4 mb-4">
            {company.logoUrl ? (
              <img src={company.logoUrl} alt={company.name} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <FaBuilding className="w-12 h-12 text-blue-600" />
            )}
            <h2 className="text-xl font-semibold text-blue-800">{company.name}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {company.services.map((service, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-md bg-gray-50 hover:bg-gray-100 transition-all duration-200"
              >
                <h3 className="font-medium text-lg text-gray-800 mb-1">{service.name}</h3>
                <p className={`text-sm flex items-center ${statusColor[service.status]}`}>
                  {statusIcon[service.status]} {service.status}
                </p>
                {service.events.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                    {service.events.map((event, i) => (
                      <li key={i}>{event}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

