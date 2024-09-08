"use client";

import { fetcher } from "@/utils/fetcher";
import { createContext, useContext, ReactNode, useState } from 'react';
import useSWR from 'swr';

import { SearchContextProps, MovieDetailProps, FilterTypeProps } from '@/types/movieTypes';

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch need to be in SearchProvider");
  }

  return context;
};

export const getUrlWithParams = (queryCtx: string, filterType: string) => {
  const params = new URLSearchParams();
  params.append('apikey', process.env.NEXT_PUBLIC_OMDB_API_KEY || '');

  if (filterType && filterType !== 'any') {
    params.append('type', filterType);
  }

  if (queryCtx) {
    params.append('s', queryCtx);
  }

  const queryStr = params.toString();
  const url = `http://www.omdbapi.com/?${queryStr}`;
  return url;
};

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [queryCtx, setQueryCtx] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<FilterTypeProps>('any');
  const { data, error, isLoading } = useSWR(
    queryCtx
      ? getUrlWithParams(queryCtx, filterType)
      : null,
    fetcher
  );

  const movies = data?.Search || [];

  const [selectedMovieID, setSelectedMovieID] = useState<string>('');
  const { data: movieDetails, error: movieDetailsError, isLoading: isMovieDetailsLoading } = useSWR(
    selectedMovieID ? `http://www.omdbapi.com/?i=${selectedMovieID}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}` : null,
    fetcher
  );

  return (
    <SearchContext.Provider value={{
      movies,
      queryCtx,
      setQueryCtx,
      isLoading,
      error,

      filterType,
      setFilterType,

      selectedMovieID,
      setSelectedMovieID,
      movieDetails,
      movieDetailsError,
      isMovieDetailsLoading,
    }}>
      {children}
    </SearchContext.Provider>
  );
};
