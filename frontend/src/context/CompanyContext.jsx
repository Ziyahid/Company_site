import React, { createContext, useEffect, useState } from 'react';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyList, setCompanyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('http://localhost:5000/api/companies');
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        setCompanyList(data);
      } catch (error) {
        console.error('Failed to fetch companies:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // The value object should include BOTH companyList AND setCompanyList
  const contextValue = {
    companyList,
    setCompanyList,
    loading,
    error,
    // Optional: Add a refresh function
    refreshCompanies: () => {
      const fetchCompanies = async () => {
        try {
          setLoading(true);
          setError(null);
          const res = await fetch('http://localhost:5000/api/companies');
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          setCompanyList(data);
        } catch (error) {
          console.error('Failed to fetch companies:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchCompanies();
    }
  };

  return (
    <CompanyContext.Provider value={contextValue}>
      {children}
    </CompanyContext.Provider>
  );
};
