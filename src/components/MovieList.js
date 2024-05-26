import React from "react";
import { MovieCard } from "./MovieCard";
import { IMAGE_CDN_URL } from "../constants";

export function MoviesList({ title, movies }) {
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl py-4 text-white text-left">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}
