import React from "react";
import { Header } from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { GeminiSearch } from "./GeminiSearch";
import { useSelector } from "react-redux";

export function Browse() {
  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGeminiSearch ? (
        <GeminiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}
