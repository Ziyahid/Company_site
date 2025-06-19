import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const DirectorsTab = () => {
  const company = useOutletContext();
  const [directors, setDirectors] = useState(company.directors || []);

  const [newDirector, setNewDirector] = useState({
    name: '',
    dob: '',
    nationality: '',
    gender: '',
  });

  const handleChange = (e) => {
    setNewDirector({
      ...newDirector,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDirector = () => {
    if (!newDirector.name || !newDirector.dob || !newDirector.nationality || !newDirector.gender) return;
    setDirectors([...directors, newDirector]);
    setNewDirector({ name: '', dob: '', nationality: '', gender: '' });
  };

  const handleDeleteDirector = (index) => {
  const director = directors[index];
  const confirmDelete = window.confirm(`Are you sure you want to delete director "${director.name}"?`);
  if (!confirmDelete) return;

  const updated = [...directors];
  updated.splice(index, 1);
  setDirectors(updated);
};

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Directors</h3>
      <table className="min-w-full bg-white text-sm border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">DOB</th>
            <th className="py-2 px-4">Nationality</th>
            <th className="py-2 px-4">Gender</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((dir, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2 px-4">{dir.name}</td>
              <td className="py-2 px-4">{dir.dob}</td>
              <td className="py-2 px-4">{dir.nationality}</td>
              <td className="py-2 px-4">{dir.gender}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleDeleteDirector(idx)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr className="border-t">
            <td className="py-2 px-4">
              <input
                name="name"
                value={newDirector.name}
                onChange={handleChange}
                className="border px-2 py-1 w-full"
                placeholder="Name"
              />
            </td>
            <td className="py-2 px-4">
              <input
                type="date"
                name="dob"
                value={newDirector.dob}
                onChange={handleChange}
                className="border px-2 py-1 w-full"
              />
            </td>
            <td className="py-2 px-4">
              <input
                name="nationality"
                value={newDirector.nationality}
                onChange={handleChange}
                className="border px-2 py-1 w-full"
                placeholder="Nationality"
              />
            </td>
            <td className="py-2 px-4">
              <select
                name="gender"
                value={newDirector.gender}
                onChange={handleChange}
                className="border px-2 py-1 w-full"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </td>
            <td className="py-2 px-4">
              <button
                onClick={handleAddDirector}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                + Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DirectorsTab;

