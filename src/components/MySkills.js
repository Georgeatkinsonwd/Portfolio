import Skills from './Skills'
import About from './About'


const MySkills = () => {
    return(
        <div style={style}>
            <Skills />
            <About />
        </div>
    )
}


const style = {
    display:"flex",
    width:"100%",
}


export default MySkills