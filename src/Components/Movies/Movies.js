import axios from "axios";
import React, { useEffect, useState } from "react";
import useGenres from "../../CustomerHooks/useGenres";
import Genres from "../Genres/Genres";
import CustomPagination from "../Pagination/CustomPagination";
import SingleMovie from "../SingleMovie/SingleMovie";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForURL = useGenres(selectedGenres);
  console.log(genreForURL);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
      );
      const data = await response.data;
      setMovies(response.data.results);
      setNumOfPages(data.total_pages);
    };
    fetchMovies();
  }, [page, genreForURL]);
  return (
    <div className="trending_container">
      <h1 className="title">Movies</h1>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
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
              media_type="movie"
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
