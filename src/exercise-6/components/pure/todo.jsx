const Todo = ({ onclick, completed, text, id}) => {
    return(
        <li onClick={onclick}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                color: completed ? 'green' : 'white'
            }}
        >
            {id} - {text}
        </li>
    )
}

export default Todo