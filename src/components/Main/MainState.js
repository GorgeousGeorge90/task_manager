import {useEffect,useReducer} from 'react';
import mainReducer from "./mainReducer";
import {addTaskAction, completeTaskAction, deleteTaskAction, getTasksAction} from './main.actions';
import {MainContext} from "./MainContext";
import axios from "axios";


const MainState = ({children})=> {

    const initialState = {
        tasks: [],
    }

    const baseUrl =' https://test-60949-default-rtdb.firebaseio.com'

    const [state,dispatch] = useReducer(mainReducer, initialState)
    window.state = state



    useEffect(()=>{
        axios.get(`${baseUrl}/tasks.json`)
            .then(response => {
                const payload = Object.keys(response.data).map(key=> {
                    return {
                        ...response.data[key],
                        id:key,
                    }
                })
                dispatch(getTasksAction(payload))
                }
        )
    },[])

    const addTask = async text => {
            const data = new Date()
            const body = {
                text,
                date:`${data.getDate()}.${data.getMonth()}.${data.getFullYear()}`,
                complete:false,
            }
            const response = await axios.post(`${baseUrl}/tasks.json`,body)
            if (response.status === 200) {
                const newTask = {
                    ...body,
                    id:response.data.name,
                }
                dispatch(addTaskAction(newTask))
            } else {
                console.log(response.status)
            }
    }

    const completeTask = async id => {
        const response = await axios.patch(`${baseUrl}/tasks/${id}.json`, {
            complete:true,
        })
        dispatch(completeTaskAction(id))
    }

    const deleteTask = async id => {
            const response = await axios.delete(`${baseUrl}/tasks/${id}.json`)
            dispatch(deleteTaskAction(id))
    }

    return (
        <MainContext.Provider value={{
            tasks:state.tasks,addTask,completeTask, deleteTask,
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainState