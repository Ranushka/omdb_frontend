"use client";

import { fetcher } from "@/utils/fetcher";
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from 'swr';

import { SearchContextProps, MovieDetailProps, FilterTypeProps } from '@/types/movieTypes';
import { getMovieDetailUrl, getMovieListingUrl } from "@/utils/getApiUrl";

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch need to be in SearchProvider");
  }

  return context;
};

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get search query from the url and set as default
  const [queryCtx, setQueryCtx] = useState<string | null>(searchParams.get("q") || null);

  // TODO need to safly set content filter type value from url
  const [filterType, setFilterType] = useState<FilterTypeProps>('any');

  const { data: queryCtxData, error: moviesListError, isLoading: moviesListIsLoading } = useSWR(
    queryCtx ? getMovieListingUrl(queryCtx, filterType) : null,
    fetcher
  );
  const moviesList = queryCtxData?.Search || [];

  const [selectedMovieID, setSelectedMovieID] = useState<string>('');
  const { data: movieDetails, error: movieDetailsError, isLoading: isMovieDetailsLoading } = useSWR(
    selectedMovieID ? getMovieDetailUrl(selectedMovieID) : null,
    fetcher
  );

  useEffect(() => {
    // Need to query results as url parms
    // 
    // TODO query detail movie from url parms
    // TODO need query results as url parms
    if (queryCtx) {
      const params = new URLSearchParams();

      if (queryCtx) {
        params.set("q", queryCtx);
      }

      router.replace(`?${params.toString()}`);
    }
  }, [queryCtx, filterType, router]);

  return (
    <SearchContext.Provider value={{
      queryCtx,
      setQueryCtx,
      moviesList,
      moviesListError,
      moviesListIsLoading,

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
