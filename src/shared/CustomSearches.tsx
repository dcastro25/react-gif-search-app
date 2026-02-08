interface Props{
    Placeholder?:string
}

export function CustomSearches ({Placeholder}:Props){
    return (
        <div className = "search-container">
            <input type ="text" placeholder={Placeholder}/>
            <button> Buscar</button>
        </div>
    )
}