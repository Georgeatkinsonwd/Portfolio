import Button from './Button'

const Description = ({onAdd, showProject}) => {
    return(
        <div>
            <h1>Testing</h1>
            <p>hello hello hello</p>
            <Button color={showProject ? 'red' : 'green'} onClick={onAdd} text={showProject ? 'Hide Projects' : 'Show Projects'}/>

            
        </div>
    )
}


export default Description