import axios from "./axios";
import React, { useEffect, useState } from "react";

import "./Banner.css";
import requests from "./Request";


const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (string, number) => {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <span className="banner__title">{movie?.name || movie?.title || movie?.original_name}</span>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">my list</button>
        </div>
        <span title={movie?.overview} className="banner__description">
          {truncate(movie?.overview, 150)}
        </span>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
