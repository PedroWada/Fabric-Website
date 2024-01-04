import axios from "axios"
import { useState } from "react"


export default function Country() {

    const [country, setCountry] = useState()
    const [info, setInfo] = useState()
    const [lang, setLang] = useState([])

    const fetch = () => {
        axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then((resp) => {
            setInfo(resp.data[0])
            console.log(resp.data[0])
            setLang( Object.values(resp.data[0].languages))
            
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <h1>Country Search</h1>
            <input type="text" onChange={(e) => {setCountry(e.target.value)}}/>
            <button onClick={fetch}>Search</button>
            
             <p>Name: {info?.name.common}</p>
             <p>Flag : {info?.flag}</p>
             <p>Languages: {lang.map((el, i)=> {
                return <span key={i}> / {el} / </span>
             })
            }</p>
             <p>Capital : {info?.capital[0]}</p>
             <p>Continents : {info?.continents.map((el,i) => {
                return <span key={i}> / {el} / </span>
             })}</p>

           
            
        </div>
    )
}