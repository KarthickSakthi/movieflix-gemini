import React from "react";
import { Header } from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

export function Browse() {
  const { data: movies } = useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
}
