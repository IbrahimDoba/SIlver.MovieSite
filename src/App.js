import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";
import MovieDetailPage from "./Components/MoviesSection/MovieDetailPage";
import SeriesDetails from "./Components/SeriesSection/SeriesDetailsPage";
import MoviePage from "./Components/MoviesSection/MoviePage";
import SeriesPage from "./Components/SeriesSection/SeriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/series/:id" element={<SeriesDetails />} />
        <Route path="/movies" element={<MoviePage/>} />
        <Route path="/series" element={<SeriesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
