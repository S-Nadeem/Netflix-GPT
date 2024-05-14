import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTopRated } from "../store/Slices/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addTopRated(data.results));
  };

  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
