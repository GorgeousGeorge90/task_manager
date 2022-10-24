export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD POST';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const IS_FETCHING = 'IS_FETCHING';


const mainReducer = (state,action) => {
    switch (action.type) {

        case GET_TASKS: {
            return {
                ...state,
                tasks: action.payload,
            }
        }

        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
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

        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload,
            }
        }

        default: {
            return state
        }
    }
}

export default mainReducer