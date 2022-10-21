import styles from './Task.module.scss';
import {useEffect, useState} from 'react';

const Task = ({task, completeTask, deleteTask}) => {

    const {id, number,text,complete,date} = task
    const [line, setLine] = useState('none')

    useEffect(()=>{
        complete ? setLine('line-through') : setLine('none')
    },[complete])

    return (<>
                <div className={styles.task} style={{textDecoration:line}}>
                    <span className={styles.number}>{number}</span>
                    <span onClick={()=>completeTask(id)}>{text}</span>
                    <span className={styles.delete} onClick={()=>deleteTask(id)}>&#128465;</span>
                    <span className={styles.date}>Date:{date}</span>
                </div>
            </>
    )
}

export default Task