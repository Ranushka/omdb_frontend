"use client";

import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/20/solid";

import { useSearch } from "@/context/SearchContext";
import MovieDetailSkeleton from "@/components/MovieDetailSkeleton";
import PlaceholderMsg from "./PlaceholderMsg";


const MovieDetail: React.FC = () => {
  const { movieDetails, isMovieDetailsLoading, movieDetailsError, selectedMovieID } = useSearch();

  if (!selectedMovieID) return <PlaceholderMsg> ← Select a movie to see details</PlaceholderMsg>;
  if (isMovieDetailsLoading) return <MovieDetailSkeleton />;
  if (movieDetailsError) return <PlaceholderMsg> Error loading movie details. </PlaceholderMsg>;
  if (!movieDetails) return <PlaceholderMsg> No movie details found. </PlaceholderMsg>;

  return (
    <div className="p-4">
      <div className="flex">
        <div className="flex-shrink-0 mt-4">
          <Image
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            width={200}
            height={300}
            placeholder="data:image/svg+xml,%3Csvg width='200' height='300' viewBox='0 0 200 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='300' fill='url(%23paint0_linear_21_26)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_21_26' x1='112.5' y1='-5.67523e-08' x2='110.938' y2='300' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23CDCDCD'/%3E%3Cstop offset='1' stop-color='%23858585'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"
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