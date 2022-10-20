import {useEffect, useRef} from 'react';


const Task = ({task, complete, id, completeTask}) => {

    const checkInput = useRef()

    useEffect(()=>{
        console.log(checkInput.current.checked)
    },[checkInput])

    return (<>
                <div>
                    <input type="checkbox" ref={checkInput} />
                    {task}
                </div>
            </>
    )
}

export default Task