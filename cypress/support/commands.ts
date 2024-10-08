/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('mockMovieSearch', () => {
  cy.fixture('movies.json').then((moviesData) => {
    cy.intercept('GET', `https://www.omdbapi.com/?apikey=4d3d3b7&s=Batman`, {
      statusCode: 200,
      body: moviesData,
    }).as('mockMovieSearch');
  });
});

Cypress.Commands.add('mockMovieDetail_batman_begins', () => {
  cy.fixture('batman_begins.json').then((batman_begins) => {
    cy.intercept('GET', `https://www.omdbapi.com/?apikey=4d3d3b7&i=tt0372784`, {
      statusCode: 200,
      body: batman_begins,
    }).as('mockMovieDetail_batman_begins');
  });
});

Cypress.Commands.add('mockMovieDetail_the_batman', () => {
  cy.fixture('the_batman.json').then((the_batman) => {
    cy.intercept('GET', `https://www.omdbapi.com/?apikey=4d3d3b7&i=tt1877830`, {
      statusCode: 200,
      body: the_batman,
    }).as('mockMovieDetail_the_batman');
  });
});

Cypress.Commands.add('mockMovieDetail_batman_begins_loading', () => {
  cy.intercept('GET', `https://www.omdbapi.com/?apikey=4d3d3b7&i=tt0372784`, {
    statusCode: 200,
    delay: 3000,
  }).as('mockMovieDetail_batman_begins_loading');
});

Cypress.Commands.add('mockMovieSearch_loading', () => {
  cy.intercept('GET', `https://www.omdbapi.com/?apikey=4d3d3b7&s=Batman`, {
    statusCode: 200,
    delay: 3000,
  }).as('mockMovieSearch_loading');
});
