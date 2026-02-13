import { useEffect, useState } from "react";

interface Props{
    Placeholder?:string
    onQuery: (query: string)=>void
}

export function CustomSearches ({Placeholder, onQuery}:Props){
    const [query, setQuery] = useState("");
    useEffect(()=>{

        const idTimeOut = setTimeout (() => {
        onQuery(query)
        }, 700);

        return ()=>{
            clearTimeout (idTimeOut)
        }

    },[query]);

    const handleSearch =()=>{
        onQuery(query);
        setQuery(""); 
    }

    const handleKeyDown =(event: React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key == 'Enter'){
            handleSearch()
        }
    }

    return(
        <div>
            <h2> ni  idea que era este componente</h2>
            <input
                value = {query}
                placeholder={Placeholder} 
                onKeyDown = {handleKeyDown}
                onChange = {(event) => setQuery(event.target.value)}/>
            <button
                onClick={handleSearch}
            > enviar esa kga</button>
        </div>
    )
}