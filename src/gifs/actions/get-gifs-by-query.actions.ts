import axios from "axios";
import type { GiphyResponse } from "../interface/giphy.response"; 
import type { Gif } from "../interface/gif.interface";

const API_KEY = "LgWpch4F4kClKpVUAaM5JGs3BvKhOJ5X";

export const getGifsByQuery = async (query:string): Promise<Gif[]> => {

   const { data } = await axios.get<GiphyResponse>(
        "https://api.giphy.com/v1/gifs/search",
        {
            params : {
                api_key: API_KEY,
                q: query,
                limit: 10,
                lang: "es",
                rating: "g"
            }
        }
    );

    return data.data.map((gif)=> ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)

    }));
}
