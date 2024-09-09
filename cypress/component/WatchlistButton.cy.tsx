import WatchlistButton from '@/components/MovieDetail/WatchlistButton';
import React from 'react';
import { mount } from 'cypress/react18';

describe('<WatchlistButton />', () => {
  const selectedMovieID = '12345';

  beforeEach(() => {
    // clear localstorage before each
    localStorage.clear();
  });

  it('renders the WatchlistButton with default state', () => {
    mount(<WatchlistButton selectedMovieID={selectedMovieID} />);
    cy.get('button').should('contain', 'Watchlist');
    cy.get('svg').should('have.class', 'text-gray-500');
  });

  it('adds a movie to the watchlist when clicked', () => {
    mount(<WatchlistButton selectedMovieID={selectedMovieID} />);

    cy.get('button').click();

    cy.window().then((window) => {
      const watchList = JSON.parse(
        window.localStorage.getItem('watchList') || '[]'
      );
      expect(watchList).to.include(selectedMovieID);
    });

    cy.get('svg').should('have.class', 'text-yellow-500');
  });

  it('removes a movie from the watchlist when clicked again', () => {
    localStorage.setItem('watchList', JSON.stringify([selectedMovieID]));

    mount(<WatchlistButton selectedMovieID={selectedMovieID} />);

    cy.get('button').click();

    cy.window().then((window) => {
      const watchList = JSON.parse(
        window.localStorage.getItem('watchList') || '[]'
      );
      expect(watchList).to.not.include(selectedMovieID);
    });

    cy.get('svg').should('have.class', 'text-gray-500');
  });

  it('loads with the correct saved state', () => {
    localStorage.setItem('watchList', JSON.stringify([selectedMovieID]));

    mount(<WatchlistButton selectedMovieID={selectedMovieID} />);

    cy.get('svg').should('have.class', 'text-yellow-500');
  });
});
