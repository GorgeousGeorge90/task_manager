import * as yup from 'yup'

export const TaskSchema = yup.object().shape({
    task: yup.string().min(2).max(100).required(),
})