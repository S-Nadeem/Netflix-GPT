import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTvSeries } from "../store/Slices/movieSlice";

const useTvSeries = () => {
  const dispatch = useDispatch();

  const gettvSeries = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addTvSeries(data.results));
  };

  useEffect(() => {
    gettvSeries();
  }, []);
};

export default useTvSeries;
