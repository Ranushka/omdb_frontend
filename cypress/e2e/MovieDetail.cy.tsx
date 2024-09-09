describe('Search Functionality', () => {
  it('should allow the user to search for movies', () => {
    cy.mockMovieSearch();
    cy.mockMovieDetail_batman_begins();

    cy.visit('http://localhost:3000/');

    cy.get('input[name="query"]').type('Batman');
    cy.get('form').submit();

    cy.get('#movieSearchReults').contains('Batman Begins').click();

    cy.get('main').should('contain.text', 'Batman Begins');
    cy.get('main').should('contain.text', 'PG-13');
    cy.get('main').should('contain.text', '2005');
    cy.get('main').should('contain.text', 'Action, Crime, Drama');
    cy.get('main').should('contain.text', 'Christian Bale, Michael Caine');

    // Check for
    cy.get('main').should('contain.text', 'After witnessing his parents');

    // Check IMDb rating
    cy.get('main .movie_detail_rating')
      .contains('Internet Movie Database')
      .parent()
      .find('p')
      .first()
      .should('have.text', '8.2/10');

    // Check Rotten Tomatoes rating
    cy.get('.movie_detail_rating')
      .contains('Rotten Tomatoes')
      .parent()
      .find('p')
      .first()
      .should('have.text', '85%');

    // Check Metacritic rating
    cy.get('.movie_detail_rating')
      .contains('Metacritic')
      .parent()
      .find('p')
      .first()
      .should('have.text', '70/100');
  });
});
