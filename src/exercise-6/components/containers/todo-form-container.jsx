import { connect } from "react-redux"
import TodoForm from "../pure/todo-form"
import { addTodo } from "../../store/actions/actions"


const mapStateToProps = (state) => {
    return{
        
    }

    
}


const mapDispatchToProps = (dispatch) => {
    return{
       submit: (text) => {
        dispatch(addTodo(text))
       }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default TodoFormContainer;