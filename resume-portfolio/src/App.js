import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
      <div className="App">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
  );
}

export default App;
