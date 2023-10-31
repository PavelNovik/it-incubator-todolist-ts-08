import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export const todolistsReducer = (state: TodolistType[], action: TodolistsReducerType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(el => el.id !== action.payload.id)
        case 'ADD-TODOLIST' : {
            const newTodolist: TodolistType = {id: v1(), title: action.payload.title, filter: 'all'}
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE' : {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
        case 'CHANGE-TODOLIST-FILTER' : {
            return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.filter} : el)
        }
        default :
            return state
    }
}

type TodolistsReducerType = RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleType | ChangeTodolistFilterType


type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id
        }
    } as const
}
type AddTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title
        }
    } as const
}

type ChangeTodolistTitleType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id,
            title
        }
    } as const
}
type ChangeTodolistFilterType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id,
            filter
        }
    } as const
}