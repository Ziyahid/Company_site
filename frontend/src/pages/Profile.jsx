import React, { useState } from 'react';
import profile from '../assets/profile.png';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('account');

  const sections = [
    { id: 'account', label: 'Account Settings' },
    { id: 'personal', label: 'Personal Information' },
    { id: 'auth', label: 'Authentication' },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" className="mt-1 block w-full border rounded p-2" defaultValue="john_doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border rounded p-2" defaultValue="john@example.com" />
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
            </div>
          </div>
        );
      case 'personal':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full border rounded p-2" defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" className="mt-1 block w-full border rounded p-2" defaultValue="+1234567890" />
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update Info</button>
            </div>
          </div>
        );
      case 'auth':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Authentication</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" className="mt-1 block w-full border rounded p-2" placeholder="Enter new password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Two-Factor Auth</label>
                <select className="mt-1 block w-full border rounded p-2">
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update Authentication</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Profile Settings</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
          {/* Profile Picture */}
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <p className="text-lg font-semibold text-gray-800 mb-6">John Doe</p>

          {/* Navigation Buttons */}
          <ul className="w-full space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Content */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow">
          {renderSectionContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
