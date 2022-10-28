import './App.css';
import About from './Components/about/About';
import AboutMe from './Components/aboutMe/AboutMe';
import Github_stats from './Components/github/Github_stats';
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
      <Github_stats />
    </div>
  );
}

export default App;
