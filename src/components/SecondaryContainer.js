import React from "react";
import { MoviesList } from "./MovieList";
import { useSelector } from "react-redux";

export function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
 
  return (
    <>
      {movies.nowPlaying && (
        <div className="bg-black">
          <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
            <MoviesList title={"Now Playing"} movies={movies.nowPlaying} />
            <MoviesList title={"Trending"} movies={movies.nowPlaying} />
            <MoviesList title={"Popular"} movies={movies.popular} />
            <MoviesList title={"Upcoming Movies"} movies={movies.nowPlaying} />
            <MoviesList title={"Horror"} movies={movies.nowPlaying} />
          </div>
        </div>
      )}
    </>
  );
};
