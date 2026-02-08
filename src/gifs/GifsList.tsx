import type{Gif} from '../mock-data/mocks-data'

interface Props {
    gifs: Gif[];
}

export function GifsList ({gifs}:Props){
    return (
        <div className="gifs-container">
         { gifs.map((gifs) =>(
            <div key ={gifs.id} className="gif-card">
                <img src ={gifs.url} alt={gifs.title}/>
                <h3>{gifs.title}</h3>
                <p>
                    {gifs.width} x {gifs.height}
                </p>
            </div>
            ))
        }
        </div>

    )
};