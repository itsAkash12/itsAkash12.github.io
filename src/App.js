import './App.css';
import About from './Components/about/About';
import AboutMe from './Components/aboutMe/AboutMe';
import Header from './Components/header/Header';
import Projects from './Components/projects/Projects';
import Skills from './Components/skills/Skills';
function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <AboutMe />
      <Skills /> 
      <Projects />
    </div>
  );
}

export default App;
