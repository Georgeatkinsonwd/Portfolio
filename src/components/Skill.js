

const Skill = ({skill}) => {
    return (
        <div className="block" style={blockStyle}>
            <img style={style} src={skill} alt="logo"></img>
          
        </div>
    ) 
}

const style={
    height:"100px",
    width:"100px",
}


const blockStyle = {
    width:"50%",
    display:"flex",
    justifyContent: "center"
}

export default Skill 