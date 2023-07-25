import '../styles/projects.css'
import Project from './Project'
import filmPic from '../images/filmPic.png'
import filmHome from '../images/filmHome.png'
import googleAuth from '../images/googleAuth.png'
import portfolioWeb from '../images/portfolioWeb.png'
import portfolioMobile from '../images/portfolioMobile.png'
import portfolioPage from '../images/portfolioPage.png'



const Projects = () => {
    return(
       <div>
        <h2>Projects</h2>

        <Project 
        img={[filmHome,googleAuth, filmPic ]} 
        title="Film Diary" 
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id venenatis enim. Maecenas auctor aliquet tincidunt. Maecenas in mauris pulvinar, efficitur lorem in, ornare elit. Integer mollis diam a quam interdum, id laoreet erat sagittis. Morbi cursus egestas sem sed vestibulum. Suspendisse vitae aliquet magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
        ghLink="https://github.com/Georgeatkinsonwd/google-auth-filmList"
        />

        <Project 
        img={[portfolioWeb,  portfolioPage, portfolioMobile]} 
        title="Art Portfolio" 
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id venenatis enim. Maecenas auctor aliquet tincidunt. Maecenas in mauris pulvinar, efficitur lorem in, ornare elit. Integer mollis diam a quam interdum, id laoreet erat sagittis. Morbi cursus egestas sem sed vestibulum. Suspendisse vitae aliquet magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
        ghLink="https://github.com/Georgeatkinsonwd/Laura-Portfolio"
        />

       </div>
        
       
    )
}




export default Projects 