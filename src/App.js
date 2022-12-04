import { Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/Search";
import Trending from "./Components/Trending/Trending";
import TvSeries from "./Components/TvSeries/TvSeries";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <NavBar />
    </div>
  );
};

export default App;
