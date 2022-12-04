import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav_container">
      <div className="nav_links">
        <Link to="/" className="nav_link">
          <i className="uil uil-fire" />
          Trending
        </Link>
        <Link to="/movies" className="nav_link">
          <i className="uil uil-film" />
          Movies
        </Link>
        <Link to="/tvseries" className="nav_link">
          <i className="uil uil-tv-retro" />
          TV Series
        </Link>
        <Link to="/search" className="nav_link">
          <i className="uil uil-search-alt" />
          Search
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
