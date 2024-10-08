import React from "react";
import { IMAGE_CDN_URL } from "../constants";

export function MovieCard({ posterPath }) {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
}
