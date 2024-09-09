// cypress/support/cypress.d.ts

// Import the default Cypress types
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to mock the movie search API.
     * @param searchTerm The term to search for, default is 'Batman'.
     */
    mockMovieSearch(): Chainable<Subject>;
    mockMovieDetail_batman_begins(): Chainable<Subject>;
    mockMovieDetail_the_batman(): Chainable<Subject>;
    mockMovieDetail_batman_begins_loading(): Chainable<>;
    mockMovieSearch_loading(): Chainable<>;
  }
}
