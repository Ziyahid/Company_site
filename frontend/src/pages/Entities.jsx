import React, { useState, useContext } from 'react';
import { FaEdit, FaPlus, FaSave, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CompanyContext } from '../context/CompanyContext';
import axios from 'axios';

const Entities = () => {
  const [editingEmailId, setEditingEmailId] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const navigate = useNavigate();
  const { companyList } = useContext(CompanyContext);

  const handleRowClick = (companyId) => navigate(`/company/${companyId}`);

  const handleEditEmail = (e, companyId, currentEmail) => {
    e.stopPropagation();
    setEditingEmailId(companyId);
    setNewEmail(currentEmail);
  };

  const handleSaveEmail = async (e, companyId) => {
    e.stopPropagation();
    try {
      const res = await axios.put(`/api/companies/${companyId}/email`, { email: newEmail });
  
      setEditingEmailId(null);
      setNewEmail('');
    } catch (error) {
      console.error('Failed to update email:', error);
      alert('Error updating email');
    }
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
        <h1 className="text-3xl font-semibold text-gray-800">Entities</h1>
        <button
          onClick={handleAddCompany}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition"
        >
          <FaPlus className="text-sm" />
          <span className="text-sm font-medium">Add Company</span>
        </button>
      </div>

      <div className="overflow-x-auto shadow-md rounded-xl bg-white">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-500">Company Name</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500">Reg. Number</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500">Jurisdiction</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500">Agent Name</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {companyList.length > 0 ? (
              companyList.map((company) => (
                <tr
                  key={company._id}
                  className="hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => handleRowClick(company._id)}
                >
                  <td className="px-6 py-4">{company.name}</td>
                  <td className="px-6 py-4">{company.registrationNumber}</td>
                  <td className="px-6 py-4">{company.jurisdiction}</td>
                  <td className="px-6 py-4">{company.agentName}</td>
                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    {editingEmailId === company._id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="email"
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                        <button
                          onClick={(e) => handleSaveEmail(e, company._id)}
                          className="text-green-600 hover:text-green-700"
                          title="Save"
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-red-500 hover:text-red-600"
                          title="Cancel"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleEditEmail(e, company._id, company.email)}
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <FaEdit className="text-sm" /> <span className="text-sm">Edit Email</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
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
