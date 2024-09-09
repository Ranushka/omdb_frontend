import { BASE_URL } from '../../utils/const';
import 'cypress-axe';

// describe('Accessibility Test', () => {
//   it('Check for accessibility on load', () => {
//     cy.mockMovieSearch();
//     cy.mockMovieDetail_batman_begins();

//     cy.visit(`${BASE_URL}/?q=Batman&oid=tt0372784`);
//     cy.injectAxe();

//     cy.wait('@mockMovieSearch');
//     cy.wait('@mockMovieDetail_batman_begins');

//     cy.wait(1000);

//     cy.checkA11y();
//   });
// });

describe('Visual Testing', () => {
  it('Landing page check', () => {
    cy.visit(BASE_URL);
    cy.viewport(1280, 720);
    cy.matchImageSnapshot('../visual_test/landing');
  });

  it('Page with Search results', () => {
    cy.mockMovieSearch();
    cy.mockMovieDetail_batman_begins();

    cy.visit(`${BASE_URL}/?q=Batman&oid=tt0372784`);

    cy.wait('@mockMovieSearch');
    cy.wait('@mockMovieDetail_batman_begins');

    cy.wait(1000);

    cy.viewport(1280, 720);
    cy.matchImageSnapshot('../visual_test/with_data');
  });

  it('Page with Search results are stil loading', () => {
    cy.mockMovieDetail_batman_begins_loading();
    cy.mockMovieSearch_loading();

    cy.visit(`${BASE_URL}/?q=Batman&oid=tt0372784`);

    cy.viewport(1280, 720);
    cy.matchImageSnapshot('../visual_test/with_data_loading');
  });
});
