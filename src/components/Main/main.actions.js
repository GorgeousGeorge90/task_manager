import {ADD_TASK, COMPLETE_TASK, DELETE_TASK} from './mainReducer';


export const addTaskAction = task => ({type:ADD_TASK,payload: task})
export const completeTaskAction = id => ({type:COMPLETE_TASK, payload: id})
export const deleteTaskAction = id => ({type:DELETE_TASK, payload: id})