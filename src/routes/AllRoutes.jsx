import { Routes, Route } from "react-router-dom"
import MovieList from "../pages/MovieList"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MovieList/>} />
            <Route path="/trending" element={<MovieList/>} />
            <Route path="/newreleses" element={<MovieList/>} />
        </Routes>
    );
};

export default AllRoutes;