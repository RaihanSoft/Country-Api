import { useEffect } from "react"
import { useState } from "react"
import Contry from "../Contry/Contry"

const Contries = () => {

    const [contries, setCountries] = useState([])

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    } ,[])



  return (
    <div>

        <h3>Countries {contries.length} </h3>

        {

            contries.map(contry =><Contry key={contry.cca3} item={contry} ></Contry> )


        }
      
    </div>
  )
}

export default Contries
