import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-5 ml-0 font-semibold text-white  ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {movieList?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
