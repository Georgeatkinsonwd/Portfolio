import '../styles/project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Project = ({img, title, about, ghLink}) => {
    return(
        <div className="projectCont">
            <div className="projectImgs">
            <img className="upperImg" src={img[0]} alt="filmPic" />
            <img className="upperImg"  src={img[1]} alt="filmPic" />
            </div>
            <div className="projectDesc">
                <h2>{title}</h2>
                <p>{about}</p>
                <a href={ghLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-icon" icon={faGithub}/></a>
                <img className="lowerImg" src={img[2]} alt="filmPic" />
            
            </div>
        </div>
    )
}




export default Project