import { Routes, Route } from "react-router-dom"
import MovieList from "../pages/MovieList"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MovieList/>} />
            <Route path="/trending" element={<MovieList/>} /> {/*https://api.themoviedb.org/3/movie/top_rated*/}
            <Route path="/upcoming" element={<MovieList/>} /> {/*https://api.themoviedb.org/3/movie/upcoming */}
        </Routes>
    );
};

export default AllRoutes;