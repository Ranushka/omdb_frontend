"use client";

import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/20/solid";

import { useSearch } from "@/context/SearchContext";
import MovieDetailSkeleton from "@/components/MovieDetail/MovieDetailSkeleton";
import PlaceholderMsg from "@/components/PlaceholderMsg";
import RatingsDisplay from "./RatingsDisplay";
import { placeholderImg } from "@/const";

const MovieDetail: React.FC = () => {
  const { movieDetails, isMovieDetailsLoading, movieDetailsError, selectedMovieID } = useSearch();

  if (!selectedMovieID) return <PlaceholderMsg>Select a movie to see details</PlaceholderMsg>;
  if (isMovieDetailsLoading) return <MovieDetailSkeleton />;
  if (movieDetailsError) return <PlaceholderMsg>Error loading movie details.</PlaceholderMsg>;
  if (!movieDetails) return <PlaceholderMsg>No movie details found.</PlaceholderMsg>;

  return (
    <div className="p-4">
      <div className="block md:flex">
        <div className="flex-shrink-0 mb-4 lg:mb-0 flex justify-center">
          <Image
            src={movieDetails.Poster === "N/A" ? placeholderImg : movieDetails.Poster}
            alt={movieDetails.Title}
            width={200}
            height={300}
            placeholder={placeholderImg}
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

      <RatingsDisplay />
    </div>
  );
};

export default MovieDetail;