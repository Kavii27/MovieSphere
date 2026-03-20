import { Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MovieList from "../pages/MovieList"
import TrendingList from "../pages/TrendingList"
import UpcomingList from "../pages/UpcomingList"
import SearchResults from "../pages/SearchResults"
import MovieDetail from "../components/MovieDetail"

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/"         element={<MainLayout><MovieList /></MainLayout>} />
      <Route path="/trending" element={<MainLayout><TrendingList /></MainLayout>} />
      <Route path="/upcoming" element={<MainLayout><UpcomingList /></MainLayout>} />
      <Route path="/search"   element={<MainLayout><SearchResults /></MainLayout>} />

      {/* No MainLayout here — header & footer won't appear */}
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default AllRoutes;