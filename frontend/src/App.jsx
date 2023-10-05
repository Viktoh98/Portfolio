import React from "react";
import { useMyData } from "./context/UserContext";
import Header from "./components/Header";
import Skill from "./sections/Skill";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Qualification from "./sections/Qualification";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Skeleton from "./components/Skeleton";

function App() {
  const { myData, loading, error } = useMyData();

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <About />
      <Qualification />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
