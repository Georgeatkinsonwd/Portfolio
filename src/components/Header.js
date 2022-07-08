

const Header = () => {
    return(
        <div style={style}>
        <h1>George Atkinson</h1>
        <h2>Full Stack Web Developer</h2>
        </div>
    )
}


const style = {
    boxSizing: "border box",
    fontFamily: "Roboto",
    height: "300px",
    width:"100%",
    background: "linear-gradient(173deg, rgba(225,40,245,1) 0%, rgba(73,107,184,1) 69%)",
    backgroundPosition: "50% 100%, 0px 0px",
    paddingTop: "150px",
    color: "white"
    
}


export default Header

