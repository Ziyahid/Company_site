import React, { createContext, useEffect, useState } from 'react';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/companies');
        const data = await res.json();
        setCompanyList(data);
      } catch (error) {
        console.error('Failed to fetch companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <CompanyContext.Provider value={{ companyList }}>
      {children}
    </CompanyContext.Provider>
  );
};
