
import Project from './Project'
import filmPic from '../images/filmPic.jpg'
import '../styles/projects.css'
import Description from './Description'
import { useState } from 'react'


// Maybe have a carousel of projects rotating 

const Projects = () => {
    const [showProjects, setShowProjects] = useState(false)
    return(
        <div className="projectsBackground">
            <h2>Projects</h2>
            <Description onAdd={()=> setShowProjects(!showProjects)} />
            <div className="imageContainer">
            {showProjects &&<Project img={filmPic} title="Movie App" />}
            {showProjects &&<Project title="filler"/>}
            {showProjects &&<Project title="filler2" />}
            </div>
        </div>
    )
}




export default Projects 