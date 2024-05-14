import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addmovieTrailer } from "../store/Slices/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailermoviePlay = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await response.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const filter = filterData.length ? filterData[0] : jsonData.results;

    dispatch(addmovieTrailer(filter));
  };

  useEffect(() => {
    trailermoviePlay();
  }, []);
};

export default useMovieTrailer;
