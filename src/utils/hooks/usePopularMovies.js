import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addPopularMovies } from "../store/Slices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
