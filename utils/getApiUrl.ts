export const getMovieListingUrl = (queryCtx: string, filterType: string) => {
  const params = new URLSearchParams();
  params.append('apikey', process.env.NEXT_PUBLIC_OMDB_API_KEY || '');

  if (filterType && filterType !== 'any') {
    params.append('type', filterType);
  }

  if (queryCtx) {
    params.append('s', queryCtx);
  }

  const queryStr = params.toString();
  return `https://www.omdbapi.com/?${queryStr}`;
};

export const getMovieDetailUrl = (selectedMovieID: string) => {
  const params = new URLSearchParams();
  params.append('apikey', process.env.NEXT_PUBLIC_OMDB_API_KEY || '');

  if (selectedMovieID) {
    params.append('i', selectedMovieID);
  }

  const queryStr = params.toString();
  return `https://www.omdbapi.com/?${queryStr}`;
};
