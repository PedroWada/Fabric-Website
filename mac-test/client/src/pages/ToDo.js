import { useState } from "react"
import Task from "../components/Task"

export default function ToDo(){

    const [task, setTask] = useState('')
    const [listTasks, setListTasks] = useState([])

    function Submit(e){
        e.preventDefault()
        if(task !== ''){
            setListTasks([...listTasks, task])
            setTask('')
        }else{
            window.alert('Empty task')
        }
    }
    function deleteTask(index){
        const newlist = listTasks.filter((item, i)=> i !== index)
        setListTasks(newlist)
        }
    

    return (
        <div>
            <h1>To do App</h1>
            <form>
                <input type='text' placeholder='task:' value={task} onChange={(e)=> setTask(e.target.value)}/>
                <button  type='submit' onClick={Submit}>Submit</button>
            </form>
            <ul>
                {listTasks.map((el,index)=> {
                    return(
                        <div key={index}>
                        <Task text={el}/>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        </div>
                    )
                })}
            </ul>
            
        </div>
        
        
    )
}