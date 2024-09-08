'use client';

import Image from 'next/image';

import { useSearch } from '@/context/SearchContext';
import MovieDetailSkeleton from '@/components/MovieDetail/MovieDetailSkeleton';
import PlaceholderMsg from '@/components/PlaceholderMsg';
import RatingsDisplay from './RatingsDisplay';
import { placeholderImg } from '@/const';
import WatchlistButton from './WatchlistButton';

const MovieDetail: React.FC = () => {
  const {
    movieDetails,
    isMovieDetailsLoading,
    movieDetailsError,
    selectedMovieID,
  } = useSearch();

  if (!selectedMovieID)
    return <PlaceholderMsg>Select a movie to see details</PlaceholderMsg>;
  if (isMovieDetailsLoading) return <MovieDetailSkeleton />;
  if (movieDetailsError)
    return <PlaceholderMsg>Error loading movie details.</PlaceholderMsg>;
  if (!movieDetails)
    return <PlaceholderMsg>No movie details found.</PlaceholderMsg>;

  return (
    <div className="p-4">
      <div className="block md:flex">
        <div className="flex-shrink-0 mb-4 lg:mb-0 flex justify-center">
          <Image
            src={
              movieDetails.Poster === 'N/A'
                ? placeholderImg
                : movieDetails.Poster
            }
            alt={movieDetails.Title}
            width={200}
            height={300}
            placeholder={placeholderImg}
            className="rounded"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between ml-4">
          <div className="flex justify-end">
            <WatchlistButton selectedMovieID={selectedMovieID} />
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
