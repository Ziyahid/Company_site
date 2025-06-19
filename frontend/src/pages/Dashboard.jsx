import React, { useContext } from 'react';
import {
  FaBuilding,
  FaCheckCircle,
  FaClock,
  FaHourglassStart,
} from 'react-icons/fa';
import { CompanyContext } from '../context/CompanyContext';

const statusIcon = {
  "Completed": <FaCheckCircle className="text-green-500 inline-block mr-1" />,
  "In Progress": <FaClock className="text-yellow-500 inline-block mr-1 animate-pulse" />,
  "Not Started": <FaHourglassStart className="text-gray-400 inline-block mr-1" />
};

const statusBadge = {
  "Completed": "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Not Started": "bg-gray-100 text-gray-700"
};

const Dashboard = () => {
  const { companyList } = useContext(CompanyContext);

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Project Dashboard</h1>

      {companyList.slice(0, 3).map((company, index) => (
        <div
          key={index}
          className="rounded-xl p-6 shadow-md bg-gradient-to-tr from-white via-gray-50 to-blue-50 transition-transform duration-300 hover:scale-[1.01]"
        >
          <div className="flex items-center space-x-4 mb-4">
            {company.logoUrl ? (
              <img
                src={company.logoUrl}
                alt={company.name}
                className="w-14 h-14 rounded-full object-cover border border-blue-200"
              />
            ) : (
              <FaBuilding className="w-14 h-14 text-blue-600 bg-blue-100 rounded-full p-2" />
            )}
            <h2 className="text-2xl font-semibold text-blue-900">{company.name}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {company.services.map((service, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-lg bg-white hover:shadow-md transition duration-200"
              >
                <h3 className="text-lg font-medium text-gray-800 mb-1">{service.name}</h3>
                <p className={`text-sm inline-flex items-center px-2 py-1 rounded ${statusBadge[service.status]}`}>
                  {statusIcon[service.status]} {service.status}
                </p>

                {(service?.events?.length > 0 || service.status === "In Progress") && (
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                    {service?.events?.map((event, i) => (
                      <li key={i}>{event}</li>
                    ))}
                    {service.status === "In Progress" && (
                      <>
                        <li>Kickoff meeting held</li>
                        <li>Initial deployment done</li>
                        <li>Monitoring ongoing</li>
                      </>
                    )}
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
