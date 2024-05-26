import React from "react";
import { MoviesList } from "./MovieList";
import { useSelector } from "react-redux";

export function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-20 relative z-20">
        <MoviesList title={"Now Playing"} movies={movies.nowPlaying} />
        <MoviesList title={"Popular"} movies={movies.popular} />
        <MoviesList title={"Now Playing"} movies={movies.nowPlaying} />
        <MoviesList title={"Now Playing"} movies={movies.nowPlaying} />
        <MoviesList title={"Now Playing"} movies={movies.nowPlaying} />
      </div>
    </div>
  );
}
