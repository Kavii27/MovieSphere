import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          MovieSphere
        </Link>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-gray-400 text-center">
          Discover your next favorite movie
        </p>

        {/* Policy links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="#"
            className="text-xs sm:text-sm text-gray-500 hover:text-purple-400 transition"
          >
            Terms of service
          </Link>
          <Link
            to="#"
            className="text-xs sm:text-sm text-gray-500 hover:text-purple-400 transition"
          >
            Privacy policy
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-500" />

        {/* Copyright */}
        <p className="text-xs text-gray-600 text-center">
          © {new Date().getFullYear()} MovieSphere. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;