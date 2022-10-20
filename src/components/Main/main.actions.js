import {ADD_TASK, COMPLETE_TASK, DELETE_TASK} from './mainReducer';


export const addTaskAction = task => ({type:ADD_TASK,payload: task})
export const completeTaskAction = (id,complete) => ({type:COMPLETE_TASK, payload:{id,complete}})
export const deleteTaskAction = id => ({type:DELETE_TASK, payload: id})