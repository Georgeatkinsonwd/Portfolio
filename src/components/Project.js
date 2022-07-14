

const Project = ({title,img}) => {
    return(
        <div>
                <img style={imgStyle} src={img} alt=""></img>
        </div>
    )
}


const imgStyle ={
    width:"350px",
    height:"400px"
}


export default Project