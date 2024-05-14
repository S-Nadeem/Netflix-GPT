import React from "react";
import { Image_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 cursor-pointer">
      <img src={Image_URL + posterPath} alt="" />
    </div>
  );
};

export default MovieCard;
