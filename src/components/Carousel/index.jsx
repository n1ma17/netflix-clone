import React from 'react';
import style from './Carousel.module.scss'
import clsx from 'clsx';

const Carousel = (props) => {
    const {movies,isLargeRow} = props
    const base_URL = "https://image.tmdb.org/t/p/original/";
    return(
        <div className={style["slider"]}>
        {movies?.map(
          (item) =>
            ((isLargeRow && item.poster_path) ||
              (!isLargeRow && item.backdrop_path)) && (
              <img
                className={clsx(style['slider__poster'], style[isLargeRow && "slider__posterLarge"])}
                src={`${base_URL}${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
              />
            )
        )}
      </div>
    )
}

export default Carousel