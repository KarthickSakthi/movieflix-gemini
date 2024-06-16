import React from "react";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";
import { useSelector } from "react-redux";

export function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  const mainMovie = movies && movies[0];
  console.log({ mainMovie });
  const { original_title = "", overview = "", id="" } = mainMovie || {};

  return (
    <>
      {mainMovie && (
        <div className="pt-[30%] bg-black md:pt-0">
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
        </div>
      )}
    </>
  );
}
