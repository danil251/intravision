import {tasksAPI} from "../api/api";

const initialState = {
    tasks: [],
    statuses: [],
    priorities: [],
    users: [],
    windowCreateIsOpen: false,
    windowChangeIsOpen: false,
    preloader: false,
    taskId: '',
    task: {}
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET-TASKS': {
            return {...state, tasks: action.payload}
        }
        case 'SET-STATUSES': {
            return {...state, statuses: action.payload}
        }
        case 'SET-PRIORITIES': {
            return {...state, priorities: action.payload}
        }
        case 'OPEN-WINDOW-CREATE': {
            return {...state, windowCreateIsOpen: action.boolean}
        }
        case 'OPEN-WINDOW-CHANGE': {
            return {...state, windowChangeIsOpen: action.boolean}
        }
        case 'SET-TASK-ID': {
            return {...state, taskId: action.id}
        }
        case 'SET-TASK': {
            return {...state, task: action.payload}
        }
        case 'SET-PRELOADER': {
            return {...state, preloader: action.boolean}
        }
        case 'SET-USERS': {
            return {...state, users: action.payload}
        }
        default:
            return {...state}
    }
}

export const setTasks = (payload) => ({type: 'SET-TASKS', payload})
export const setStatuses = (payload) => ({type: 'SET-STATUSES', payload})
export const setPriorities = (payload) => ({type: 'SET-PRIORITIES', payload})
export const setUsers = (payload) => ({type: 'SET-USERS', payload})
export const openWindowCreate = (boolean) => ({type: 'OPEN-WINDOW-CREATE', boolean})
export const openWindowChange = (boolean) => ({type: 'OPEN-WINDOW-CHANGE', boolean})
export const setTaskId = (id) => ({type: 'SET-TASK-ID', id})
export const setTask = (payload) => ({type: 'SET-TASK', payload})
export const setPreloader = (boolean) => ({type: 'SET-PRELOADER', boolean})


export const fetchTasks = () => async (dispatch) => {
    await dispatch(setPreloader(true))
    await tasksAPI.getTasks().then(res => {
        dispatch(setTasks(res.data.value))
    })
    await dispatch(setPreloader(false))
}
export const fetchStatuses = () => (dispatch) => {
    tasksAPI.getStatuses().then(res => {
        dispatch(setStatuses(res.data))
    })
}
export const fetchUsers = () => (dispatch) => {
    tasksAPI.getUsers().then(res => {
        dispatch(setUsers(res.data))
    })
}
export const fetchPriorities = () => (dispatch) => {
    tasksAPI.getPriorities().then(res => {
        dispatch(setPriorities(res.data))
    })
}
export const creationTasks = (body) => async (dispatch) => {
    await tasksAPI.postTasks(body).then(res => {
        dispatch(setTaskId(res.data))
        dispatch(openWindowCreate(false))
        dispatch(fetchTasks())
        dispatch(fetchTask(res.data))
    })
}
export const fetchTask = (id) =>  async (dispatch) => {
     await tasksAPI.getTask(id).then(res => {
        dispatch(setTask(res.data))
    })
    await dispatch(openWindowChange(true))
}
export const putTasks = (body, id) =>  async (dispatch) => {
     await tasksAPI.putTasks(body).then(() => {
        console.log(body, 'ok')
    }).catch(() => {
        console.log( 'bad')})
    await dispatch(fetchTasks())
    await dispatch(fetchUsers())
    await dispatch(fetchStatuses())
    await dispatch(fetchPriorities())
    await dispatch(fetchTask(id))
}