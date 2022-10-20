import {v4 as uuid} from 'uuid';

export const ADD_TASK = 'ADD POST';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';



const mainReducer = (state,action) => {
    switch (action.type) {
        case ADD_TASK: {
            const newTask = {
                id: uuid(),
                task: action.payload,
                complete:false,
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            }
        }

        case COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            complete:action.payload.complete
                        }
                    } else {
                        return task
                    }
                })
            }
        }

        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        }

        default: {
            return state
        }
    }
}

export default mainReducer