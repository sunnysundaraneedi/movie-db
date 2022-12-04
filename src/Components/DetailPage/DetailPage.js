import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { img_300, unavailableLandscape } from "../../assets/asset";
import Modal from "../Modal/Modal";
import "./DetailPage.css";

const DetailPage = ({ setOpenModal, openModal, id, media_type }) => {
  const [movie, setMovie] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovie(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);
  console.log(movie);
  if (movie) {
  }
  return (
    <Modal setOpenModal={setOpenModal} openModal={openModal}>
      {movie && (
        <Fragment>
          <div className="detail_container">
            <div className="left">
              <img
                src={
                  movie.poster_path
                    ? `${img_300}/${movie.poster_path}`
                    : `${unavailableLandscape}`
                }
                alt={movie.title}
              />
            </div>
            <div className="right">
              <h1>{movie.name || movie.original_title}</h1>
              <span className="tagline">{movie.tagline}</span>
              <h3>Overview : </h3>
              <p>{movie.overview}</p>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.youtube.com/watch?v=${video}`}
                className="video_btn"
              >
                Watch the trailer
              </a>
            </div>
          </div>
        </Fragment>
      )}
    </Modal>
  );
};

export default DetailPage;
