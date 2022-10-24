import styles from './Task.module.scss';
import {useEffect, useState} from 'react';

const Task = ({task, completeTask, deleteTask, number}) => {

    const {id,text,complete,date} = task
    const [line, setLine] = useState('none')

    useEffect(()=>{
        complete ? setLine('line-through') : setLine('none')
    },[complete])

    return (<>
                <div className={styles.task} style={{textDecoration:line}}>
                    <span className={styles.number}>№{number + 1}.</span>
                    <span style={{marginLeft:'20px'}} onClick={()=>completeTask(id)}>{text}</span>
                    <span className={styles.delete} onClick={()=>deleteTask(id)}>&#128465;</span>
                    <span className={styles.date}>Date:{date}</span>
                </div>
            </>
    )
}

export default Task