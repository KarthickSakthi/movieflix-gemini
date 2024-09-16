import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addPopularMovies } from "../store/movieSlice";
import { useEffect, useState } from "react";

export const usePopularMovies = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(function getMovies() {
    const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/popular",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
      setData(data);
    };
    getNowPlayingMovies();
  }, []);

  return { data };
};
