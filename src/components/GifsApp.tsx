import CustomHeader from '../shared/CustomHeader';
import {CustomSearches} from '../shared/CustomSearches';
import {PreviousSearches} from '../gifs/PreviousSearches'
import { GifsList } from '../gifs/GifsList';
import { useState } from 'react';
import type { Gif } from '../gifs/interface/gif.interface';
import { getGifsByQuery } from '../gifs/actions/get-gifs-by-query.actions';


export function GifsApp(){
    const [previousTerm, setPreviousTerm] = useState<string[]>([]);
    const [gifs, setGifs]= useState<Gif[]>([])

    const handleTermClicked =  (Term: string) =>{
        handleSearch(Term);
    } 

    const handleSearch = async(query: string)=>{

        let newQuery = query.trim().toLowerCase();

        if(!newQuery) return;

        let filterPreviousTerm = previousTerm.filter(item => (item !== newQuery));

        setPreviousTerm([newQuery, ...filterPreviousTerm].slice(0,5));

        const data = await getGifsByQuery(query);
        setGifs(data);
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
            <GifsList gifs={gifs}/>

        </div>
    );
};