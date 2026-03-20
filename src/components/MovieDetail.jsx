import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=cad28c03141d9237941304b4f19587fa`
        );
        const data = await response.json();
        if (data.success === false) {
          setError("Movie not found.");
        } else {
          setMovie(data);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const formatCurrency = (amount) => {
    if (!amount) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(amount);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f0f13]">
        <p className="text-gray-400 animate-pulse text-lg">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f0f13]">
        <p className="text-red-400 text-center px-4">{error}</p>
      </div>
    );

  return (
    <div className="bg-[#0f0f13] min-h-screen text-gray-100 font-sans">

      {/* Backdrop */}
      <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[340px] overflow-hidden">
        {movie.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1230] to-[#0f0f1a]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f13]" />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-16
                      -mt-20 sm:-mt-28 md:-mt-32 lg:-mt-36 relative">

        {/* Poster + Header */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 lg:gap-10 items-end">

          {/* Poster */}
          <div className="flex-shrink-0 self-center sm:self-auto">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="
                  w-32 sm:w-44 md:w-52 lg:w-60
                  rounded-xl border-2 border-white/10 shadow-2xl
                "
              />
            ) : (
              <div className="
                w-32 sm:w-44 md:w-52 lg:w-60
                aspect-[2/3] rounded-xl border-2 border-white/10
                bg-[#1e1b2e] flex items-center justify-center
                text-gray-500 text-sm
              ">
                No poster
              </div>
            )}
          </div>

          {/* Header info */}
          <div className="flex-1 w-full pb-1">
            {movie.status && (
              <span className="inline-block text-[10px] sm:text-xs font-medium tracking-widest uppercase
                               px-3 py-1 rounded-full bg-purple-900/30 text-purple-300
                               border border-purple-700/40 mb-3">
                {movie.status}
              </span>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem]
                           font-semibold text-[#f0eeff] leading-tight mb-2">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="text-sm sm:text-base italic text-purple-300/70 mb-3">
                "{movie.tagline}"
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-[15px] text-gray-400 mb-4">
              <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
              <span className="text-gray-600">·</span>
              <span>{movie.original_language?.toUpperCase()}</span>
              <span className="text-gray-600">·</span>
              <span>{movie.runtime ? `${movie.runtime} min` : "N/A"}</span>
              <span className="text-gray-600">·</span>
              <span className="inline-flex items-center gap-1.5 bg-purple-900/20
                               border border-purple-700/40 text-purple-300
                               text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 rounded-full">
                <span className="text-yellow-400 text-xs">★</span>
                {movie.vote_average?.toFixed(1) ?? "N/A"}
              </span>
              {movie.vote_count > 0 && (
                <span className="text-xs sm:text-sm text-gray-500">
                  {movie.vote_count.toLocaleString()} votes
                </span>
              )}
            </div>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5
                               rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {[
            { label: "Budget",     value: formatCurrency(movie.budget),       sub: "Production" },
            { label: "Revenue",    value: formatCurrency(movie.revenue),      sub: "Worldwide"  },
            { label: "Popularity", value: movie.popularity?.toFixed(1),       sub: "TMDB score" },
            { label: "Language",   value: movie.original_language?.toUpperCase(), sub: "Original" },
          ].map(({ label, value, sub }) => (
            <div
              key={label}
              className="bg-[#17151f] border border-white/[0.07] rounded-xl
                         p-3 sm:p-4 lg:p-5"
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-1">
                {label}
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#dcd8f4]">
                {value ?? "N/A"}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] my-6 sm:my-8" />

        {/* Overview */}
        {movie.overview && (
          <div className="mb-6 sm:mb-8">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-purple-400/70 mb-2 sm:mb-3">
              Overview
            </p>
            <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-gray-300 max-w-4xl">
              {movie.overview}
            </p>
          </div>
        )}

        {/* Production companies */}
        {movie.production_companies?.length > 0 && (
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-purple-400/70 mb-2 sm:mb-3">
              Production companies
            </p>
            <div className="flex flex-wrap gap-2">
              {movie.production_companies.map((company) => (
                <span
                  key={company.id}
                  className="text-xs sm:text-sm bg-[#17151f] border border-white/[0.07]
                             rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-gray-400"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MovieDetail;