import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addUpcoming } from "../store/Slices/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addUpcoming(data.results));
  };

  useEffect(() => {
    upComingMovies();
  }, []);
};

export default useUpcomingMovies;
