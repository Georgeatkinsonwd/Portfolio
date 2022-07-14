import '../styles/descriptionStyle.css'

const Description = ({title,intro,ghLink,appLink}) => {
    return (
        <div className = 'descriptionStyle'>
            <div className='descBlock'>
            <h4>{title}</h4>
            <p>{intro}</p>
            <a target="_blank" rel="noopener noreferrer" href={appLink}>App</a>
            <a target="_blank" rel="noopener noreferrer" href={ghLink}>Github</a>
            </div>
        </div>
    )
}


export default Description