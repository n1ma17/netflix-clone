import axios from "../../axios";
import React, { memo, useEffect, useState } from "react";

import style from "./Banner.module.scss";
import requests from "../../Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (string, number) => {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  };

  useEffect(() => {
    console.log("sfefsfe");
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
      className={style["banner"]}
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className={style["banner__contents"]}>
        <span className={style["banner__title"]}>
          {movie?.name || movie?.title || movie?.original_name}
        </span>
        <div className={style["banner__buttons"]}>
          <button className={style["banner__button"]}>play</button>
          <button className={style["banner__button"]}>my list</button>
        </div>
        <span title={movie?.overview} className={style["banner__description"]}>
          {truncate(movie?.overview, 150)}
        </span>
      </div>
      <div className={style["banner--fadeBottom"]} />
    </header>
  );
};

export default memo(Banner);
