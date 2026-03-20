import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const TrendingList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=cad28c03141d9237941304b4f19587fa"
        );

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching Trending movies", errors);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12  bg-gray-900 min-h-screen">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 sm:gap-6 p-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingList;
