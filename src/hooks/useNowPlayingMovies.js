import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../store/movieSlice";
import { useEffect, useState } from "react";

export const useNowPlayingMovies = () => {
  const [data, setData] = useState();
  const nowPlaying = useSelector(store => store.movies.nowPlaying)
  const dispatch = useDispatch();

  useEffect(function getMovies() {
    const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
      setData(data);
      console.log({ data });
    };
  !nowPlaying &&  getNowPlayingMovies();
  }, []);

  return { data };
};
