import Todo from "./todo";

const TodoList = ({ todos, onTodoClick }) => {
    return(
        <div>
            <h1>Your TODOs</h1>
            <ul>
                {todos.map((todo, index) => 
                    <Todo 
                        key={index}
                        {...todo}
                        onclick = {()=> onTodoClick(todo.id)}
                    />
                )}
            </ul>
        </div>
    )
}
export default TodoList;