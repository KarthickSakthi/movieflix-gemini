import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

export function VideoBackground({ movieId }) {
  useMovieTrailer(movieId);
  const trailerData = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerData?.key) return;

  return (
    <div className="w-screen sm:mt-[-160px] md:mt-0 ">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerData?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
