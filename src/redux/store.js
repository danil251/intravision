import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {tasksReducer} from "./tasks-reducer";


const rootReducer = combineReducers({
    tasks: tasksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


