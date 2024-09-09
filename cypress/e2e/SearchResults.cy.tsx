import { BASE_URL } from '../../utils/const';

describe('Movie search result Functionality', () => {
  it('should allow the user use search results', () => {
    cy.mockMovieSearch();
    cy.mockMovieDetail_batman_begins();
    cy.mockMovieDetail_the_batman();

    cy.visit(BASE_URL);

    cy.get('input[name="query"]').type('Batman');
    cy.get('form').submit();

    // Click on a search result and view details
    cy.get('#movieSearchReults').contains('Batman Begins').click();
    cy.get('#movieDetailTitle').should('contain.text', 'Batman Begins');

    // Click on a another search result and it should change results
    cy.get('#movieSearchReults').contains('The Batman').click();
    cy.get('#movieDetailTitle').should('contain.text', 'The Batman');
  });
});
