"use client";

import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/20/solid";

import { useSearch } from "@/context/SearchContext";


const MovieDetail: React.FC = () => {
  const { movieDetails, isMovieDetailsLoading, movieDetailsError, selectedMovieID } = useSearch();

  if (!selectedMovieID) return <div>Select a movie to see details</div>;
  if (isMovieDetailsLoading) return <div>Loading movie details...</div>;
  if (movieDetailsError) return <div>Error loading movie details.</div>;
  if (!movieDetails) return <div>No movie details found.</div>;

  return (
    <div className="p-4">
      <div className="flex">
        <div className="flex-shrink-0 mt-4">
          <Image
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            width={200}
            height={300}
            className="rounded"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between ml-4">
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 border text-sm font-semibold border-gray-500 text-gray-500 hover:bg-gray-300"
            >
              <BookmarkIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 opacity-80" />
              Button text
            </button>
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold">{movieDetails.Title}</h2>
            <p>
              {movieDetails.Rated} {movieDetails.Year} · {movieDetails.Genre}
            </p>
            <p>{movieDetails.Actors}</p>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <p>{movieDetails.Plot}</p>
      <hr className="my-4" />

      <div className="flex justify-between">
        <div className="text-center">
          <p>{movieDetails.imdbRating} / 10</p>
          <p>International Movie Database</p>
        </div>
        <div className="text-center">
          <p>{movieDetails.imdbRating} / 10</p>
          <p>Rotten Tomatoes</p>
        </div>
        <div className="text-center">
          <p>{movieDetails.imdbRating} / 10</p>
          <p>Metacritic</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;