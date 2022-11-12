import { combineReducers } from "redux";
import { filterReducer } from "./filter-reducer";
import { todosReducer } from "./todos-reducer";

export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer
    }

)
