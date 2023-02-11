import { Tab, Tabs } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../Pagination/CustomPagination";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./Search.css";

const Search = () => {
  const [page, setPage] = useState(1);
  const [type, setType] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchInput}&page=${page}&include_adult=false`
    );
    setMovies(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page, type, searchInput]);

  const searchHandler = () => {
    fetchData();
    // eslint-disable-next-line
  };
  console.log(movies);
  return (
    <div className="search_container">
      <div className="input_container">
        <input
          type="search"
          className="searchbar"
          placeholder="Search Movies or TV Series "
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
        />
        <button onClick={searchHandler}>
          <i className="uil uil-search"></i>Search
        </button>
      </div>
      <Tabs
        value={type}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
      >
        <Tab style={{ width: "50%", flex: 1 }} label="Search Movies" />
        <Tab style={{ width: "50%", flex: 1 }} label="Search Tv Series" />
      </Tabs>
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
              media_type={type ? "tv" : "movie"}
            />
          ))}
        {searchInput &&
          !movies.length &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
