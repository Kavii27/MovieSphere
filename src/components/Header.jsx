import { Link, NavLink } from "react-router-dom";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  const active = "bg-purple-300 text-white font-bold px-4 py-2 rounded-full";
  const inactive = "text-black font-normal px-4 py-2 rounded-full hover:bg-purple-100 transition";

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          MovieSphere
        </Link>

        <div className="flex items-center gap-8">
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

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FiMoon className="text-xl text-black" />
        </button>

      </nav>
    </header>
  );
};

export default Header;
