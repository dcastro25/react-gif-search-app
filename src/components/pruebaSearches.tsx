import { useState } from "react";

// interface Props{
    
// }

export function PruebaSearches(){
    
    const [search, setSearch] = useState("Buscador");

    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
    }

    const handleClick =() =>{
        console.log(search)
    }

    return(
        <div>
            <h2> Buscador</h2>
            <input placeholder="buscador de cosas" onChange = {handleChange}/>
            <button type="submit" onClick ={handleClick}> Buscar</button>
        </div>
    )
}