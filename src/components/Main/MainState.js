import {useMemo, useReducer, useState} from 'react';
import mainReducer from "./mainReducer";
import {addTaskAction, completeTaskAction, deleteTaskAction} from "./main.actions";
import {MainContext} from "./MainContext";
import task from "./Task/Task";


const MainState = ({children})=> {

    const initialState = {
        tasks:JSON.parse(localStorage.getItem('tasks')) || [],
    }

    const [state,dispatch] = useReducer(mainReducer, initialState)

    window.state = state




    const addTask = task => {
        dispatch(addTaskAction(task))
    }

    const completeTask = id => {
        dispatch(completeTaskAction(id))
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