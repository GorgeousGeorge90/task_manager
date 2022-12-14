import {useContext, useEffect, useMemo, useState} from 'react';
import {MainContext} from './MainContext';
import MainForm from './MainForm/MainForm';
import Task from './Task/Task';
import styles from './Main.module.scss';
import Preloader from "../common/Preloader/Preloader";


const Main = () => {
    const {tasks, isFetching, addTask, deleteTask, completeTask} = useContext(MainContext)
    const [completed, setCompleted] = useState(0)

    useMemo(()=>{
        const completedTask = tasks.filter(task => task.complete === true)
        setCompleted(completedTask.length)
    },[tasks])



    const titleStyle = {
        fontFamily: 'fantasy',
        fontSize: '1.3em',
    }

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div className={styles.content}>
            <span style={titleStyle}>Completed tasks:{completed}</span>
            <MainForm addTask={addTask}/>
            <ul>
                {
                    tasks.map(task => {
                        return <li key={task.id}><Task task={task}
                                                       number={tasks.indexOf(task)}
                                                       completeTask={completeTask}
                                                       deleteTask={deleteTask}
                        /></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main