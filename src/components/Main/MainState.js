import {useReducer} from 'react';
import mainReducer from "./mainReducer";
import {addTaskAction, completeTaskAction, deleteTaskAction} from "./main.actions";
import {MainContext} from "./MainContext";


const MainState = ({children})=> {

    const initialState = {
        tasks:[],
    }

    const [state,dispatch] = useReducer(mainReducer, initialState)

    window.state = state

    const addTask = task => {
        dispatch(addTaskAction(task))
    }

    const completeTask = (id,complete) => {
        dispatch(completeTaskAction(id,complete))
    }

    const deleteTask = id => {
        dispatch(deleteTaskAction(id))
    }


    return (
        <MainContext.Provider value={{
            tasks:state.tasks, addTask, deleteTask,completeTask,
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainState