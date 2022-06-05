import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);

  const base_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovie(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  console.log({ movie });
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie?.map(
          (item) =>
            ((isLargeRow && item.poster_path) ||
              (!isLargeRow && item.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_URL}${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
