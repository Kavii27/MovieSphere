import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const active = "bg-purple-300 text-black font-bold px-4 py-2 rounded-full";
  const inactive = "text-gray-300 font-normal px-4 py-2 rounded-full hover:bg-purple-800 hover:text-white transition";

  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");
      setMenuOpen(false); // close menu after search
    }
  };

  return (
    <header className="w-full bg-gray-800 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          MovieSphere
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
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

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden md:flex w-full max-w-xs">
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

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">

          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? active : inactive}>
            Home
          </NavLink>

          <NavLink to="/trending" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? active : inactive}>
            Trending
          </NavLink>

          <NavLink to="/upcoming" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? active : inactive}>
            Upcoming
          </NavLink>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex w-11/12 max-w-xs">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-2 rounded-l-full bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
            <button
              type="submit"
              className="bg-purple-300 text-black px-4 py-2 rounded-r-full font-semibold"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;