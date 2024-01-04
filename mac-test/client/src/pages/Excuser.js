import axios from "axios"
import { useState } from "react"

export default function Excuser() {
    
    const [excuse, setExcuse] = useState('')

    function fetchData (type){
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then((resp)=> {
            setExcuse(resp.data[0].excuse)
        })
    }

    return (
        <div>
            <button onClick={()=> fetchData('family')}>Family</button>
            <button onClick={()=> fetchData('party')}>Party</button>
            <button onClick={()=> fetchData('office')}>Office</button>
            <h2>{excuse}</h2>
        </div>
    )
}