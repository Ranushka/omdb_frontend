import { BASE_URL } from '../../utils/const';

describe('Search Functionality', () => {
  it('should allow the user to search for movies', () => {
    cy.mockMovieSearch();

    cy.visit(BASE_URL);

    cy.get('input[name="query"]').type('Batman');
    cy.get('form').submit();

    // Check if "Batman" text is in the search input
    cy.get('input[name="query"]').should('have.value', 'Batman');

    // Check if the Count is in the search results
    cy.get('#moviesListCount').should('be.visible');

    // Check if the text 'Batman Begins' is in the search results
    cy.get('#movieSearchReults').contains('Batman Begins').should('be.visible');

    // the URL need to have query parameter with the value 'Batman'
    cy.url().should('include', '?q=Batman');
  });
});
