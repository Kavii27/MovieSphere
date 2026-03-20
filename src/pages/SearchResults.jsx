import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=cad28c03141d9237941304b4f19587fa&query=${encodeURIComponent(
            searchQuery
          )}`
        );

        const data = await response.json();
        if (data.results.length === 0) {
          setError("No movies found for your search.");
        }
        setMovies(data.results);
      } catch (err) {
        console.error(err);
        setError("Error fetching search results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 bg-gray-900 min-h-screen">
      <h2 className="text-white text-2xl font-bold mb-6 pt-6">
        Search results for "{searchQuery}"
      </h2>

      {loading ? (
        <p className="text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 sm:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;