import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate(); 

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)}
    className="w-full bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="p-3 sm:p-4">
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-tight tracking-wide mb-2 line-clamp-2"
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          {movie.title}
        </p>

        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
          <span>
            {movie.release_date?.slice(0, 4)} · {movie.original_language?.toUpperCase()}
          </span>

          <span className="bg-purple-300 text-gray-900 font-semibold px-2 py-1 rounded-lg text-xs sm:text-sm">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;