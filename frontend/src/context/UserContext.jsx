import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MyDataContext = createContext();

export function MyDataProvider({ children }) {
  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await axios.get(API_URL);
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
