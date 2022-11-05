import './App.css';
import About from './Components/about/About';
import AboutMe from './Components/aboutMe/AboutMe';
import Contact from './Components/contact/Contact';
import Github_stats from './Components/github/Github_stats';
import Header from './Components/header/Header';
import Projects from './Components/projects/Projects';
import Skills from './Components/skills/Skills';
import ThanksGiving from './Components/thanksGiving/ThanksGiving';
function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <AboutMe />
      <Skills /> 
      <Projects />
      <Github_stats />
      <Contact />
      {/* <ThanksGiving /> */}
    </div>
  );
}

export default App;
