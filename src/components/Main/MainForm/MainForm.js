import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './MainForm.scss';
import {TaskSchema} from '../../../validation/validation';


const MainForm = ({addTask}) => {

    const {register, reset, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(TaskSchema),
    })

    const onSubmit = data => {
          addTask(data.task)
          reset()
        }

    return (<>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'text'} {...register('task')}/>
                <button>Create Task</button>
                {errors.task ? <p>{errors.task.message}</p>: null}
            </form>
        </>
    )
}

export default MainForm