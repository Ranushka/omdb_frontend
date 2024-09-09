'use client';

import { fetcher } from '@/utils/fetcher';
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import { SearchContextProps, FilterTypeProps } from '@/types/movieTypes';
import { getMovieDetailUrl, getMovieListingUrl } from '@/utils/getApiUrl';

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch need to be in SearchProvider');
  }

  return context;
};

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // TODO need to safly set content filter type value from url
  const [filterType, setFilterType] = useState<FilterTypeProps>('any');

  /* 
  // get search query from url if exsist
  // search movie in OMDB
  */
  const [queryCtx, setQueryCtx] = useState<string | null>(
    searchParams.get('q') || null
  );
  const {
    data: queryCtxData,
    error: moviesListError,
    isLoading: moviesListIsLoading,
  } = useSWR(
    queryCtx ? getMovieListingUrl(queryCtx, filterType) : null,
    fetcher
  );

  /* 
  // arrange search results for easy access
  */
  const moviesList = queryCtxData?.Search || [];
  const moviesListCount = queryCtxData?.totalResults || null;

  /* 
  // get search OMDB id from url if exsist
  // OMDB Id need for getting movie details
  */
  const [selectedMovieID, setSelectedMovieID] = useState<string>(
    searchParams.get('oid') || ''
  );
  const {
    data: movieDetails,
    error: movieDetailsError,
    isLoading: isMovieDetailsLoading,
  } = useSWR(
    selectedMovieID ? getMovieDetailUrl(selectedMovieID) : null,
    fetcher
  );

  /* 
  // update the url parameters.
  // TODO need to optimize for Back/forward cache
  */
  useEffect(() => {
    if (queryCtx) {
      const params = new URLSearchParams();

      if (queryCtx) {
        params.set('q', queryCtx);
      }

      if (selectedMovieID) {
        params.set('oid', selectedMovieID);
      }

      router.replace(`?${params.toString()}`);
    }
  }, [queryCtx, filterType, router, selectedMovieID]);

  return (
    <SearchContext.Provider
      value={{
        queryCtx,
        setQueryCtx,
        moviesList,
        moviesListError,
        moviesListIsLoading,
        moviesListCount,

        filterType,
        setFilterType,

        selectedMovieID,
        setSelectedMovieID,
        movieDetails,
        movieDetailsError,
        isMovieDetailsLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
