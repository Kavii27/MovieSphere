import { useEffect } from "react"

const MovieList = () => {

    useEffect(() => {
        const response = fetch("https://api.themoviedb.org/3/movie/popular?api_key=cad28c03141d9237941304b4f19587fa")

        console.log(response)
    }, [])
    return(
        <h1>Movie List</h1>
    )
}

export default MovieList;