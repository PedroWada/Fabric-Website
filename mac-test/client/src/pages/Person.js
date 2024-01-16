import axios from 'axios'
import { useState } from 'react'

export default function Person(){
    
    const [name, setName] = useState('')
    const [person, setPerson] = useState()

    const fetchData = () => {
        axios.get(`https://api.agify.io/?name=${name}`).then((resp) => {
            setPerson(resp.data)
            console.log(person)
            //count, name, age
        })
    }

    return(
        <div>
            <h1>Generate person</h1>
            <input type='text' placeholder='name:' onChange={(e) => setName(e.target.value)}/>
            <button onClick={fetchData}>generate</button>
            <p>Age: {person?.age}</p>
            <p>Count: {person?.count}</p>
            <p>Name: {person?.name}</p>
        </div>
    )
}