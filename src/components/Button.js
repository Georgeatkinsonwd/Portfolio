import PropTypes from 'prop-types'

const Button = ({onClick}) => {
    return(
        <button onClick={onClick} style={style} className="btn">Show Project</button>
    )
}

const style = {
    backgroundColor: "green",
}



Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func,
}



export default Button