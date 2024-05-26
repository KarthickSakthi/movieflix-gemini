import React from "react";
import { IMAGE_CDN_URL } from "../constants";

export function MovieCard({ posterPath }) {
  return (
    <div className=" w-48">
      <img alt="movie" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
}
