import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../Pagination/CustomPagination";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      const data = await response.data;
      setMovies(data.results);
    };
    fetchMovies();
  }, [page]);
  console.log(movies);

  return (
    <div className="trending_container">
      <h1 className="title">Trending Today</h1>
      <div className="trending">
        {movies &&
          movies.map((movie) => (
            <SingleMovie
              key={movie.id}
              id={movie.id}
              title={movie.name || movie.title}
              poster={movie.poster_path}
              date={movie.first_air_date || movie.release_date}
              rating={movie.vote_average.toFixed(1)}
              media_type={movie.media_type}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
