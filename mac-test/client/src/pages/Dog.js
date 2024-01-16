import axios from "axios"
import { useState } from "react"


export default function Dog() {

    const [dog, setDog] = useState(null)

    const fetch = () => {
        axios.get('https://dog.ceo/api/breeds/image/random').then((resp)=> {
            setDog(resp.data.message)
        })
    }
    
    return(
        <div>
            <h1>Random Dogs</h1>
            <button onClick={fetch}>Press</button>
            {dog !== null ?
           <img src={dog} alt='Cachorro' width='400'/> 
           : <></>
            }
            
        </div>
    )
}