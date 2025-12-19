const MovieCard = ({ movie }) => {
  return (
    <div className="w-full max-w-[260px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
      
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[360px] object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-gray-900 text-3xl leading-tight tracking-wide mb-2" style={{ fontFamily: "'Bebas Neue', cursive" }}>
          {movie.title}
        </p>

        <div className="flex items-center justify-between text-gray-500 text-sm">
          <span>
            {movie.release_date?.slice(0, 4)} · {movie.original_language?.toUpperCase()}
          </span>
          <span className="bg-purple-300 text-gray-900 font-semibold px-2 py-1 rounded-lg">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
