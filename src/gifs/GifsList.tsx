import type{Gif} from '../gifs/interface/gif.interface'

interface Props{
    gifs : Gif[];


}

export const GifsList=({gifs}:Props)=>{
    return(
        <div className="gifs-container">
            {
                gifs.map(gif => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title}/>
                        <h2>{gif.title}</h2>
                        <p>
                            {gif.width} x {gif.height}
                        </p>

                    </div>
                ))
            }
        </div>
    )
}