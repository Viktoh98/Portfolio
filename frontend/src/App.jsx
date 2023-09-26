import React from 'react';
import { useMyData } from './context/UserContext';
import Header from './components/Header';
import Skill from './sections/Skill';
import Hero from './sections/Hero';
import Qualification from './sections/Qualification';
import Project from './sections/Project';
import Contact from './sections/Contact';



function App() {
  const { myData, loading, error } = useMyData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <Qualification />
      <Project />
      <Contact />
    </>
  );
}

export default App
