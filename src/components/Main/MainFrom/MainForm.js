import {useForm} from 'react-hook-form';


const MainForm = ({addTask}) => {

    const {register, reset, handleSubmit, formState:{errors}} = useForm()

    const onSubmit = data => {
          addTask(data.task)
          reset()
        }

    return (<>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'text'} {...register('task')}/>
                <button>Create Task</button>
            </form>
        </>
    )
}

export default MainForm