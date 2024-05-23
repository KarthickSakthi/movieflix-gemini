import React from "react";
import { Header } from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

export function Browse() {
  const { data: movies } = useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
}
