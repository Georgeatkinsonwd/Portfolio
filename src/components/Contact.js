import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import '../styles/contact.css'





const Contact = () => {
    return(
        <div className="contactStyle">
            <h3>Contact</h3>
            <h4 className="email">Email: Georgeatkinsonwd@gmail.com</h4>
            <div className="links">
            <a href="https://github.com/Georgeatkinsonwd" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-icon" icon={faLinkedinIn}/></a>
            <a href="https://github.com/Georgeatkinsonwd" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-icon" icon={faGithub}/></a>
            </div>
            
        </div>
    )

}


export default Contact


