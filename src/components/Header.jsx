import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const active = "bg-purple-300 text-black font-bold px-4 py-2 rounded-full";
  const inactive = "text-gray-300 font-normal px-4 py-2 rounded-full hover:bg-purple-800 hover:text-white transition";

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <header className="w-full bg-gray-800 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          MovieSphere
        </Link>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-4 justify-center flex-1 mx-8">
          <NavLink to="/" className={({ isActive }) => isActive ? active : inactive}>
            Home
          </NavLink>
          <NavLink to="/trending" className={({ isActive }) => isActive ? active : inactive}>
            Trending
          </NavLink>
          <NavLink to="/upcoming" className={({ isActive }) => isActive ? active : inactive}>
            Upcoming
          </NavLink>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex w-full max-w-xs">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-2 rounded-l-full bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
          />
          <button
            type="submit"
            className="bg-purple-300 text-black px-4 py-2 rounded-r-full font-semibold hover:bg-purple-400 transition"
          >
            Search
          </button>
        </form>

      </nav>
    </header>
  );
};

export default Header;