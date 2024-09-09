import MovieList from '@/components/MovieList/MovieList';
import { SearchContext } from '@/context/SearchContext';
import { mount } from 'cypress/react18';
import { placeholderImg } from '@/const';
import { SearchContextProps, FilterTypeProps } from '@/types/movieTypes';

describe('MovieList Component', () => {
  const mockMovie = {
    imdbID: 'tt1234567',
    Title: 'Batman Begins',
    Year: '2023',
    Poster: 'N/A',
  };

  const setup = (contextValues?: Partial<unknown>) => {
    const defaultValue: SearchContextProps = {
      moviesList: [],
      moviesListIsLoading: false,
      moviesListError: null,
      movieDetails: null,
      movieDetailsError: null,
      isMovieDetailsLoading: false,
      queryCtx: null,
      setSelectedMovieID: cy.stub(),
      moviesListCount: '200',
      setQueryCtx: cy.stub(),
      filterType: 'any' as FilterTypeProps,
      setFilterType: cy.stub(),
      selectedMovieID: '',
      ...contextValues,
    };

    mount(
      <SearchContext.Provider value={defaultValue}>
        <MovieList />
      </SearchContext.Provider>
    );
  };

  it('displays placeholder when no query is made', () => {
    setup();
    cy.contains('↑ Start searching for a movies.').should('exist');
  });

  it('displays message when no movies are found', () => {
    setup({ queryCtx: true });
    cy.contains('No movies found.').should('exist');
  });

  it('displays movies when the list is loaded', () => {
    setup({
      queryCtx: true,
      moviesList: [mockMovie],
      moviesListCount: 1,
    });

    cy.get('#moviesListCount').should('contain.text', '1 RESULTS');
    cy.get('#movieSearchReults').within(() => {
      cy.get('h3').should('contain.text', 'Batman Begins');
      cy.get('p').should('contain.text', '2023');
      cy.get('img').should('have.attr', 'src', placeholderImg);
    });
  });

  it('sets selected movie ID when a movie is clicked', () => {
    const setSelectedMovieID = cy.stub();
    setup({
      queryCtx: true,
      moviesList: [mockMovie],
      setSelectedMovieID,
    });

    cy.get('div.search_result_item')
      .click()
      .then(() => {
        expect(setSelectedMovieID).to.have.been.calledWith(mockMovie.imdbID);
      });
  });
});
