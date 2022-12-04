import { useState } from "react";
import { img_300, unavailable } from "../../assets/asset";
import DetailPage from "../DetailPage/DetailPage";
import "./SingleMovie.css";

const SingleMovie = ({ id, title, rating, poster, date, media_type }) => {
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="media">
      <img
        src={poster ? `${img_300}/${poster}` : `${unavailable}`}
        alt={title}
        className="image"
        onClick={openModalHandler}
      />
      <span className="title">{title}</span>
      <div className="sub_titles">
        <span className="sub_title">
          {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
        <span className="sub_title">{date}</span>
      </div>
      <span
        className="rating"
        style={
          rating > 6
            ? { backgroundColor: "#3f51b5" }
            : { backgroundColor: "#62002b" }
        }
      >
        {rating}
      </span>
      {openModal && (
        <DetailPage
          setOpenModal={setOpenModal}
          openModal={openModal}
          id={id}
          media_type={media_type}
        />
      )}
    </div>
  );
};

export default SingleMovie;
