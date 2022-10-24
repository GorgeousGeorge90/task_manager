import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, GET_TASKS, IS_FETCHING} from './mainReducer';

export const getTasksAction = payload => ({type:GET_TASKS, payload})
export const addTaskAction = payload => ({type:ADD_TASK,payload})
export const completeTaskAction = id => ({type:COMPLETE_TASK, payload: id})
export const deleteTaskAction = id => ({type:DELETE_TASK, payload: id})
export const getLoading = payload => ({type: IS_FETCHING, payload})