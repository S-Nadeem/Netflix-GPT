import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowplayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-8 z-20 relative">
          <MovieList
            title={"Now Playing"}
            movieList={movies.nowplayingMovies}
          />
          <MovieList title={"Popular"} movieList={movies.popularMovies} />
          <MovieList title={"Top Rated"} movieList={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movieList={movies.upComingMovies} />
          <MovieList title={"Tv Series"} movieList={movies.tvSeries} />
          <MovieList
            title={"Documentaries"}
            movieList={movies.nowplayingMovies}
          />
        </div>
      </div>
    )
  );
};
