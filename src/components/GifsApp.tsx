import {mockGifs} from '../mock-data/mocks-data'
import CustomHeader from '../shared/CustomHeader';
import {CustomSearches} from '../shared/CustomSearches';
import {PreviousSearches} from '../gifs/PreviousSearches'
import { GifsList } from '../gifs/GifsList';
import { useState } from 'react';
// import { useState } from 'react';

export function GifsApp(){
    const [previousTerm, setPreviousTerm] = useState(["dragon ball z"]);

    const handleTermClicked = (Term: string) =>{
        console.log(Term);
    }

    const handleSearch = (query: string)=>{
        console.log({query});

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