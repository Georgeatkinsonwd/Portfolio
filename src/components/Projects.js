import '../styles/projects.css'
import Button from './Button'



// Maybe have a carousel of projects rotating 

const Projects = ({onAdd, showProject}) => {
    return(
        <div className="projectsBackground">
            <h2>Projects</h2>
            <Button color={showProject ? 'red' : 'green'} onClick={onAdd} text={showProject ? 'Hide Projects' : 'Show Projects'}/> 
            <div className="imageContainer">
            
            </div>
        </div>
    )
}




export default Projects 