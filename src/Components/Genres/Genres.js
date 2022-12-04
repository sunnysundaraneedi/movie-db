import axios from "axios";
import Chip from "@mui/material/Chip";
import { useEffect } from "react";
import "./Genres.css";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
  type,
}) => {
  const addHandler = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((gen) => gen.id !== genre.id));
    setPage(1);
  };
  const removeHandler = (genre) => {
    setGenres([genre, ...genres]);
    setSelectedGenres(selectedGenres.filter((gen) => gen.id !== genre.id));
    setPage(1);
  };

  useEffect(() => {
    const fetchgenres = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setGenres(data.genres);
    };
    fetchgenres();
    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="genres">
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            size="small"
            style={{ margin: 2, backgroundColor: "#3f51b5", color: "#fff" }}
            clickable
            onDelete={() => removeHandler(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            size="small"
            style={{ margin: 2 }}
            clickable
            onClick={() => addHandler(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
