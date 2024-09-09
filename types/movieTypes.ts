export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type MovieDetailProps = {
  Title: string;
  Year: string;
  Plot: string;
  Poster: string;
  Genre: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Actors: string;
  imdbRating: string;
};

export type FilterTypeProps = 'any' | 'movie' | 'series' | 'episode';

export interface SearchContextProps {
  moviesList: Movie[];
  moviesListError: unknown;
  setQueryCtx: (query: string) => void;
  moviesListIsLoading: boolean;
  moviesListCount: string | null;
  queryCtx: string | null;

  filterType: FilterTypeProps;
  setFilterType: (filterType: FilterTypeProps) => void;

  selectedMovieID: string | null;
  setSelectedMovieID: (imdbID: string) => void;
  movieDetails: MovieDetailProps | null;
  movieDetailsError: unknown;
  isMovieDetailsLoading: boolean;
}
