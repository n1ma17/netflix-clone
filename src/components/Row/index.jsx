import axios from "../../axios";
import React, { useEffect, useState } from "react";
import style from "./Row.module.scss";
import Carousel from "components/Carousel";
import Button from "components/shared/Button";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className={style["row"]}>
      <div className={style["row__header"]}>
        <span className={style["row__header__title"]}>{title}</span>
        <div className={style["row__header__buttons"]}>
          <Button btnText='Next' />
          <Button btnText='Prev' />
        </div>
      </div>
      <Carousel movies={movies} isLargeRow={isLargeRow} />
    </div>
  );
}

export default Row;
