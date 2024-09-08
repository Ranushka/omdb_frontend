"use client";

import Image from "next/image";
import { useSearch } from "@/context/SearchContext";
import { Movie } from "@/types/movieTypes";
import MovieListSkeleton from "@/components/MovieListSkeleton";
import PlaceholderMsg from "./PlaceholderMsg";

const MovieList: React.FC = () => {
  const { movies, isLoading, error, queryCtx, setSelectedMovieID } = useSearch();

  if (!queryCtx) return <PlaceholderMsg> ↑ <br />Start searching for a movies. </PlaceholderMsg>;
  if (isLoading) return <MovieListSkeleton />;
  if (error) return <PlaceholderMsg> Error loading movies. </PlaceholderMsg>;
  if (movies.length === 0) return <PlaceholderMsg> No movies found. </PlaceholderMsg>;


  return (
    <div className="p-4 w-full">
      {movies.map((movie: Movie) => (
        <div
          key={movie.imdbID}
          className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-300"
          onClick={() => setSelectedMovieID(movie.imdbID)}
        >
          <div className="flex items-center gap-3">
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={64}
              height={96}
              className="object-cover"
              placeholder="data:image/svg+xml,%3Csvg width='200' height='300' viewBox='0 0 200 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='300' fill='url(%23paint0_linear_21_26)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_21_26' x1='112.5' y1='-5.67523e-08' x2='110.938' y2='300' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23CDCDCD'/%3E%3Cstop offset='1' stop-color='%23858585'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"
            />
            <div>
              <h3 className="text-sm font-semibold">{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
