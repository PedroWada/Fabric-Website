import { useState } from "react"
export default function Counter(){

    const [counter, setCounter] = useState(0)

    function addCounter () {
        setCounter(counter+1)
    }
    function deleteCounter() {
        setCounter(counter-1)
    }
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={addCounter}>+</button>
            <button onClick={deleteCounter}>-</button>

            
        </div>
    )
}