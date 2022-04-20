import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FaRegEye, FaTimes, FaRegEyeSlash } from "react-icons/fa";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <>
      <div className="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button className="ctrl-btn">
              <FaRegEye onClick={() => addMovieToWatched(movie)} />
            </button>

            <button className="ctrl-btn">
              <FaTimes onClick={() => removeMovieFromWatchlist(movie.id)} />
            </button>
          </>
        )}

        {type === "watched" && (
          <>
            <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
              <FaRegEyeSlash />
            </button>
            <button
              className="ctrl-btn"
              onClick={() => removeFromWatched(movie.id)}
            >
              <FaTimes />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default MovieControls;
