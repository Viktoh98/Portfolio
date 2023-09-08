import React from 'react';
import { useMyData } from './context/UserContext';

function App() {
  const { myData, loading, error } = useMyData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Now you can use myData in this component
  // ...

  return (
    <div>
      Hello World
    </div>
  );
}

export default App
