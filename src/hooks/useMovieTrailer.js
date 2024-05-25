import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTrailerVideo } from "../store/movieSlice";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();

  useEffect(function getMovieVideo() {
    async function getMoviewVideoData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const result = (await response.json()).results;
      const video = result.filter((video) => video.type === "Trailer");
      const data = video.length ? video[0] : result[0];
      dispatch(addTrailerVideo(data));
    }
    getMoviewVideoData();
  }, []);
}

export default useMovieTrailer;
