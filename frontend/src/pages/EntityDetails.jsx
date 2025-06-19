import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EntityDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const dummyCompanies = [
      {
        _id: '1',
        name: 'Alpha Corp',
        registrationNumber: 'REG-001',
        jurisdiction: 'USA',
        agentName: 'John Doe',
        email: 'alpha@example.com',
        directors: [
          { name: 'John Smith', dob: '1980-05-12', nationality: 'American', gender: 'Male' }
        ]
      },
  
    ];
    const selected = dummyCompanies.find((c) => c._id === id);
    setCompany(selected);
  }, [id]);

  if (!company) return <div className="p-6 text-gray-600">Loading company data...</div>;

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">{company.name}</h2>

        <div className="space-y-4 text-gray-700 text-base">
          <p><span className="font-medium text-gray-600">Registration Number:</span> {company.registrationNumber}</p>
          <p><span className="font-medium text-gray-600">Jurisdiction:</span> {company.jurisdiction}</p>
          <p><span className="font-medium text-gray-600">Agent Name:</span> {company.agentName}</p>
          <p>
            <span className="font-medium text-gray-600">Email:</span>{' '}
            <a href={`mailto:${company.email}`} className="text-blue-600 hover:underline">
              {company.email}
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <NavLink
            to={`/company/${id}/events`}
            className="bg-gray-800 text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-700 transition"
          >
            View Events
          </NavLink>
          <NavLink
            to={`/company/${id}/directors`}
            className="border border-gray-500 text-gray-800 px-5 py-2.5 rounded-md text-sm hover:bg-gray-100 transition"
          >
            View Directors
          </NavLink>
        </div>
      </div>

    
      <div className="mt-6">
        <Outlet context={company} />
      </div>
    </div>
  );
};

export default EntityDetails;
