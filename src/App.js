import './App.css';
import filmPic from './images/filmPic.jpg'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MySkills from './components/MySkills'
import Project from './components/Project'
import Description from './components/Description'
import { useState } from 'react'

function App() {
  const [showProjects, setShowProjects] = useState(false)
  return (
    <div className="App">
      <Header />
      <MySkills />
      <h2>Projects</h2>
      <div className="descContainer">
      <Description
      title = "Google Auth film App"
      intro="Can log in using Google auth and search films from the IMDB to add to your watch/watched list"
      ghLink="https://github.com/Georgeatkinsonwd/google-auth-filmList"
      appLink="https://film-watchlist.herokuapp.com/"
       />
      <Description 
      title="Placeholder1"
      intro="Can log in using Google auth and search films from the IMDB to add to your watch/watched list"
      />
      <Description
      title="Placeholder2"
      intro="Can log in using Google auth and search films from the IMDB to add to your watch/watched list"
      />
      </div>
      <Projects onAdd={()=> setShowProjects(!showProjects)} showProject={showProjects} />
      <div className = 'imgContainer'>
        {showProjects &&<Project img={filmPic}/>}
        {showProjects &&<Project title="filler"/>}
        {showProjects &&<Project title="filler2" />}
        </div>
      <Contact />
    </div>
  );
}

export default App;
