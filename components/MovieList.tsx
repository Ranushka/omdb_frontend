"use client";

import { useSearch } from '@/context/SearchContext';
import { Movie, SearchContextProps } from '@/types/movieTypes';

const MovieList: React.FC = () => {
  const { movies, isLoading, error, queryCtx, setSelectedMovieID } = useSearch();

  if (!queryCtx) return <div>Start searching for a movies</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies.</div>;
  if (movies.length === 0) return <div>No movies found.</div>;

  return (
    <div className="p-4 w-full">
      {movies.map((movie: Movie) => (
        <div
          key={movie.imdbID}
          className="p-2 border-b border-gray-300 cursor-pointer"
          onClick={() => setSelectedMovieID(movie.imdbID)}
        >
          <div className="flex items-center">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-16 h-24 object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;