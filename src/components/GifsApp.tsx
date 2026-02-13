import {mockGifs} from '../mock-data/mocks-data'
import CustomHeader from '../shared/CustomHeader';
import {CustomSearches} from '../shared/CustomSearches';
import {PreviousSearches} from '../gifs/PreviousSearches'
import { GifsList } from '../gifs/GifsList';
import { useState } from 'react';


export function GifsApp(){
    const [previousTerm, setPreviousTerm] = useState(["dragon ball z"]);

    const handleTermClicked = (Term: string) =>{
        console.log(Term);
    } 

    const handleSearch = (query: string)=>{

        let newQuery = query.trim().toLowerCase();

        if(!newQuery) return;

        let filterPreviousTerm = previousTerm.filter(item => (item !== newQuery));

        setPreviousTerm([newQuery, ...filterPreviousTerm].slice(0,5));
    };
    
    return(

        <div>
            {/* Header */}
            <CustomHeader 
                Title = {"Buscador de gifs"} 
                Description = {"Descubre y comparte el Gif perfecto"}
            />

            {/* Search */}
            <CustomSearches
                Placeholder = "Buscar Gifs"
                onQuery = { handleSearch }
            />

            {/* Busqueda previas*/}
            <PreviousSearches 
                searches = {previousTerm} 
                onLabelClicked={handleTermClicked}
            />

            {/* Gifs*/ }    
            <GifsList gifs={mockGifs}/>

        </div>
    );
};