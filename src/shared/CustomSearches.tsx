import { useState } from "react";

interface Props{
    Placeholder?:string
    onQuery: (query: string)=>void
}

export function CustomSearches ({Placeholder, onQuery}:Props){
    const [query, setQuery] = useState("");
    
    const handleSearch =()=>{
        onQuery(query);
        onQuery("");
    }

    return (
        <div className = "search-container">
            <input 
                type ="text" 
                placeholder={Placeholder}
                value={query}
                onChange = {(event) => setQuery(event.target.value)}
            />

            <button onClick ={handleSearch}> Buscar</button>
        </div>
    )
}