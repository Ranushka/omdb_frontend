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
  movies: Movie[];
  setQueryCtx: (query: string) => void;
  isLoading: boolean;
  queryCtx: string | null;
  error: any;

  filterType: FilterTypeProps;
  setFilterType: (filterType: FilterTypeProps) => void;

  selectedMovieID: string | null;
  setSelectedMovieID: (imdbID: string) => void;
  movieDetails: MovieDetailProps | null;
  movieDetailsError: any;
  isMovieDetailsLoading: boolean;
}
