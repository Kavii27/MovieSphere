import { Routes, Route } from "react-router-dom"
import MovieList from "../pages/MovieList"
import TrendingList from "../pages/TrendingList"
import UpcomingList from "../pages/UpcomingList"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MovieList/>} />
            <Route path="/trending" element={<TrendingList/>} /> {/*https://api.themoviedb.org/3/movie/top_rated*/}
            <Route path="/upcoming" element={<UpcomingList/>} /> {/*https://api.themoviedb.org/3/movie/upcoming */}
        </Routes>
    );
};

export default AllRoutes;