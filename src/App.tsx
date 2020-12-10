import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import Skills from "./components/Skills/Skills";
import Jobs from "./components/Jobs/Jobs";
import Employ from "./components/Employ/Employ";


function App() {
  return (
    <div>
      <Header/>
      <Presentation/>
      <Skills/>
      <Jobs/>
      <Employ/>
    </div>
  );
}

export default App;
