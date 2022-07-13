import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return(
        <div className="headerStyle spacer layer1">
        <FontAwesomeIcon className="codeIcon" icon={faLaptopCode}/>
        <h1>Hello, I'm George Atkinson.</h1>
        <h2>I'm a Full Stack Web Developer</h2>
        </div>
    )
}




export default Header

