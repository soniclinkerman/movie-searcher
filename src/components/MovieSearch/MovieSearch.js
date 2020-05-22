import React, {useState} from "react"
import Card from "../Card/Card";
import Scroll from "../../Scroll";

export default function MovieSearch() {

    const [query, setQuery] = useState("");

    const [movies, setMovies] = useState([])
    const API_KEY = "cc09e115d6d6fe7e078c2fa835c52152"
    
    const searchMovies = async (e) => {
        e.preventDefault()
    

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data.results)
        setMovies(data.results);
    }catch(err){
        console.error(err);
    }
}

    
    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label"htmlFor="query" ></label>
                    <input className="input" type="text" name="query" placeholder="Enter movie here" value={query} onChange={(e) =>setQuery(e.target.value) }/>  
                <button className="button" type="submit">Search</button>
            </form>

            <Scroll>
            <div className="card-list">   
                {movies.filter(movie => movie.poster_path).map(movie => (
                <Card movie={movie} key ={movie.id}/>
                ))}
            </div>
            </Scroll>

         </div>
    )
    

}





    
    






