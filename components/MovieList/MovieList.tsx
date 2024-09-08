"use client";

import Image from "next/image";
import { useSearch } from "@/context/SearchContext";
import { Movie } from "@/types/movieTypes";
import MovieListSkeleton from "@/components/MovieList/MovieListSkeleton";
import PlaceholderMsg from "../PlaceholderMsg";
import { placeholderImg } from "@/const";

const MovieList: React.FC = () => {
  const { moviesList, moviesListIsLoading, moviesListError, queryCtx, setSelectedMovieID } = useSearch();

  if (!queryCtx) return <PlaceholderMsg> ↑ <br />Start searching for a movies. </PlaceholderMsg>;
  if (moviesListIsLoading) return <MovieListSkeleton />;
  if (moviesListError) return <PlaceholderMsg> Error loading movies. </PlaceholderMsg>;
  if (moviesList.length === 0) return <PlaceholderMsg> No movies found. </PlaceholderMsg>;

  return (
    <div className="p-4 w-full flex lg:flex-col">
      {moviesList.map((movie: Movie) => (
        <div
          key={movie.imdbID}
          className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-300"
          onClick={() => setSelectedMovieID(movie.imdbID)}
        >
          <div className="flex items-start lg:items-center gap-3 flex-col lg:flex-row">
            <div className="relative w-44 lg:w-24 h-64 lg:h-28  overflow-hidden flex-shrink-0">
              <Image
                src={movie.Poster === "N/A" ? placeholderImg : movie.Poster}
                alt={movie.Title}
                width={64}
                height={96}
                className="object-cover w-full h-full"
                placeholder={placeholderImg}
              />
            </div>

            <div>
              <h3 className="text-xs lg:text-sm font-semibold">{movie.Title}</h3>
              <p className="text-xs">{movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
