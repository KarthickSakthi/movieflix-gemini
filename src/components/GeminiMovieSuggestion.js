import { useSelector } from "react-redux";
import { MoviesList } from "./MovieList";

export function GeminiMovieSuggestion() {
  const { movieResults, movieNames } = useSelector((store) => store.gemini);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
}
