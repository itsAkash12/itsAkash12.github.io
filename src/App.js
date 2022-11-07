import './App.css';
import About from './Components/about/About';
import AboutMe from './Components/aboutMe/AboutMe';
import Contact from './Components/contact/Contact';
import Github_stats from './Components/github/Github_stats';
import Header from './Components/header/Header';
import Sidebar from './Components/header/Sidebar';
import Projects from './Components/projects/Projects';
import Skills from './Components/skills/Skills';
import Backdrop from "./Components/header/Backdrop"
import ThanksGiving from './Components/thanksGiving/ThanksGiving';
import { useState } from 'react';
function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = ()=> {
    setSidebar((prevState)=> !prevState)
  }
  return (
    <div className="App">
      <Header openSidebar={toggleSidebar} sidebar={sidebar}/>
      <Backdrop sidebar={sidebar} close={toggleSidebar}/>
      <Sidebar sidebar={sidebar}/>
      <About />
      <AboutMe />
      <Skills /> 
      <Projects />
      <Github_stats />
      <Contact />
    </div>
  );
}

export default App;
