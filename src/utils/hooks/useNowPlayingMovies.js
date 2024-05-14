import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addnowplayingMovies } from "../store/Slices/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingApi = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addnowplayingMovies(data.results));
  };

  useEffect(() => {
    nowPlayingApi();
  }, []);
};

export default useNowPlayingMovies;
