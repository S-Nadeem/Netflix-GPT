import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useTvSeries from "../utils/hooks/useTvSeries";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

const Browse = () => {
  const showGpttoggle = useSelector((store) => store.gpt.showgptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvSeries();

  return (
    <div>
      <Header />
      {showGpttoggle ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
