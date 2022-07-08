import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MySkills from './components/MySkills'

function App() {
  return (
    <div className="App">
      <Header />
      <MySkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
