import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MyDataContext = createContext();

export function MyDataProvider({ children }) {
  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/');
        console.log(response.data)
        setMyData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <MyDataContext.Provider value={{ myData, loading, error }}>
      {children}
    </MyDataContext.Provider>
  );
}

export function useMyData() {
  return useContext(MyDataContext);
}
