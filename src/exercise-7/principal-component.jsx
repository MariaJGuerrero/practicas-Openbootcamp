import { useReducer, useState } from "react";


let initialId = 0;
const tasksList = []

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COMPLETED_TASK = 'COMPLETED_TASK'

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            const task = {
                id: initialId + 1,
                name: action.payload.name,
                description: action.payload.description,
                completed: false
            }
            initialId = initialId + 1
            return [
                ...state,
                task
            ];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id )
            
        case COMPLETED_TASK:
            return state.map((task) => 
            (task.id === action.payload.id)
            ?
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    completed: !task.completed
                } 
            : 
                task
        )
        default:
            return state;
    }
}


/*const SHOW_ALL = 'SHOW-ALL';
const SHOW_COMPLETED = 'SHOW-COMPLETED';
const SHOW_UNCOMPLETED = 'SHOW-UNCOMPLETED';

const filterReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return [...state]

        case SHOW_COMPLETED:
            return state.filter((task) => 
            (task.completed === action.payload.completed)
            ?
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    completed: task.completed
                } 
            : 
                undefined
        )
        case  SHOW_UNCOMPLETED:
            return state.filter((task) => 
            (task.completed !== action.payload.completed)
            ?
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    completed: !task.completed
                } 
            : 
                undefined
        )
          
    
        default:
            break;
    }
}*/



const TasksListComponent = () => {

    const [state, dispatch] = useReducer(reducer, tasksList)
    //const [filterState, filterDispatch] = useReducer(filterReducer, tasksList)
    const [isCompleted, setIsCompleted] = useState(state.completed)

    const submitHandler = (e) => {
        e.preventDefault()
        const datos = new FormData(e.target)
        const name = datos.get('name');
        const description = datos.get('description')
        dispatch({
            type: ADD_TASK,
            payload: {
                 name,
                 description
            } 
        })
    }

    const filterCompletedTrue = () => state.filter((task) => isCompleted ? <li>{task}</li> : '') 
    const filterCompletedFalse = () => state.filter((task) => isCompleted ? '' : <li>{task}</li>) 
    

    return(
        <div>
            <button onClick={
                () => [...state]
            }>Show all</button>
            <button onClick={
                () => filterCompletedTrue()
            }>Show completed</button>
            <button onClick={
                () => filterCompletedFalse()
            }>Show uncompleted</button>
            <h1>TASKS</h1>
            <ul>{console.log('estadooooo2', state)}{state.map((task)=> 
                <div key={task.id}>
                    {setIsCompleted(task.completed)}
                    <li style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                        {task.name}: {task.description}
                        <button onClick={
                        () => dispatch({
                            type: COMPLETED_TASK, 
                            payload: {
                                name: task.name,
                                description: task.description,
                                id: task.id
                            }
                        })
                    }>Completed</button>
                    <button onClick={
                        () => dispatch({
                            type: DELETE_TASK,
                            payload: {
                                name: task.name,
                                description: task.description,
                                id: task.id
                            }
                        })
                    }>Delete</button>   
                    </li>
                    
                    
                </div>
                
            )
                }

            </ul>
            <form onSubmit= {(e) => submitHandler(e)}>
                <label><input type="text" name="name" placeholder="name" required/></label>
                <label><input type="text" name="description" placeholder="description"/></label>
                <button  type='submit'>Add task</button>
            </form>
        </div>
    )
}

export default TasksListComponent;