const TodoForm = ({ submit }) => {
    return(
        <div>
            <h2>create yours TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                console.log(formData.get('text'))
                submit(formData.get('text'))
            }}>
                <input type='text' name='text'/>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default TodoForm