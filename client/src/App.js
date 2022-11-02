import React from "react";
import "./styles/App.css";
import "./styles/globalRules.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Pages/Landing/Landing";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <MyWork />
      <Contact />
    </>
  );
};

export default App;
