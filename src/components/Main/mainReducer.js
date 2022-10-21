import {v4 as uuid} from 'uuid';

export const ADD_TASK = 'ADD POST';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';



const mainReducer = (state,action) => {
    switch (action.type) {
        case ADD_TASK: {
            const data = new Date()
            const newTask = {
                id: uuid(),
                number: state.tasks.length + 1,
                text: action.payload,
                date:`${data.getDate()}.${data.getMonth()}.${data.getFullYear()}`,
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
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            complete:true,
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