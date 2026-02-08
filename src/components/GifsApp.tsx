import { GifsList} from '../gifs/GifsList';
import CustomHeader from '../shared/CustomHeader';
import {CustomSearches} from '../shared/CustomSearches';
import {PreviousSearches} from '../gifs/PreviousSearches'
import { mockGifs } from '../mock-data/mocks-data';

export function GifsApp(){
    return(
        <>
            {/* Header */}
            <CustomHeader 
                Title = {"Buscador de gifs"} 
                Description = {"Descubre y comparte el Gif perfecto"}
            />

            {/* Search */}
            <CustomSearches
                Placeholder = "Buscar Gifs"
            />

            {/* Busqueda previas*/}
            <PreviousSearches/>

            {/* Gifs*/ }
            <GifsList gifs={mockGifs}/>

        </>
    )
}