import {useContext} from 'react';
import {MainContext} from './MainContext';
import MainForm from './MainFrom/MainForm';
import Task from './Task/Task';


const Main = () => {
    const {tasks, addTask, deleteTask, completeTask} = useContext(MainContext)
    return (
        <div>
            <MainForm addTask={addTask}/>
            <ul>
                {
                    tasks.map(task => {
                        return <li><Task task={task.task}
                                         complete={task.complete}
                                         id = {task.id}
                                         completeTask={completeTask}

                        /></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main