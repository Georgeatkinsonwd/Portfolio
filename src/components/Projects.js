
import Project from './Project'
import filmPic from '../images/filmPic.jpg'

// Maybe have a carousel of projects rotating 

const Projects = () => {
    return(
        <div style={backgroundStyle}>
            <h2>Projects</h2>
            <div const style={style}>
            <Project img={filmPic} title="Movie App" />
            <Project title="filler"/>
            <Project title="filler2" />
            </div>
        </div>
    )
}


const backgroundStyle = {
    height:"600px",
    background: "linear-gradient(173deg, rgba(225,40,245,1) 0%, rgba(73,107,184,1) 69%)",
    boxSizing:"border-box"
}



const style = {
    display:"flex",
    height:"80%",
    justifyContent: "space-between",
    alignItems:"center",
    margin:"20px"
}

export default Projects 