import React, { useState, useContext } from 'react';
import { FaEdit, FaPlus, FaSave, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CompanyContext } from '../context/CompanyContext';

const Entities = () => {
  const [editingEmailId, setEditingEmailId] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const navigate = useNavigate();

  const { companyList } = useContext(CompanyContext);

  console.log(companyList)

  const handleRowClick = (companyId) => {
    navigate(`/company/${companyId}`);
  };

  const handleEditEmail = (e, companyId, currentEmail) => {
    e.stopPropagation();
    setEditingEmailId(companyId);
    setNewEmail(currentEmail);
  };

  const handleSaveEmail = (e, companyId) => {
    e.stopPropagation();
    // Ideally: send PATCH request to backend and refresh data
    const updatedCompanies = companyList.map(company =>
      company._id === companyId ? { ...company, email: newEmail } : company
    );
    // If CompanyContext supports a setter, use it here. For now, just reset local UI state.
    setEditingEmailId(null);
    setNewEmail('');
  };

  const handleCancelEdit = (e) => {
    e.stopPropagation();
    setEditingEmailId(null);
    setNewEmail('');
  };

  const handleAddCompany = () => {
    alert('Open Add Company form');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Entities</h1>
        <button
          onClick={handleAddCompany}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <FaPlus /> Add Company
        </button>
      </div>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="py-3 px-4">Company Name</th>
              <th className="py-3 px-4">Reg. Number</th>
              <th className="py-3 px-4">Jurisdiction</th>
              <th className="py-3 px-4">Agent Name</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companyList.length > 0 ? (
              companyList.map((company) => (
                <tr key={company._id} className="hover:bg-gray-50 border-b">
                  <td className="py-3 px-4 cursor-pointer" onClick={() => handleRowClick(company._id)}>
                    {company.name}
                  </td>
                  <td className="py-3 px-4 cursor-pointer" onClick={() => handleRowClick(company._id)}>
                    {company.registrationNumber}
                  </td>
                  <td className="py-3 px-4 cursor-pointer" onClick={() => handleRowClick(company._id)}>
                    {company.jurisdiction}
                  </td>
                  <td className="py-3 px-4 cursor-pointer" onClick={() => handleRowClick(company._id)}>
                    {company.agentName}
                  </td>
                  <td className="py-3 px-4">
                    {editingEmailId === company._id ? (
                      <div className="flex gap-2 items-center">
                        <input
                          type="email"
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                          className="border px-2 py-1 text-sm rounded"
                        />
                        <button
                          onClick={(e) => handleSaveEmail(e, company._id)}
                          className="text-green-600 hover:underline"
                          title="Save"
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-red-500 hover:underline"
                          title="Cancel"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleEditEmail(e, company._id, company.email)}
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <FaEdit /> Edit Email
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No companies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Entities;
