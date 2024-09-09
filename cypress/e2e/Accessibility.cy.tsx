import { BASE_URL } from '../../utils/const';
import 'cypress-axe';

describe('Accessibility Test', () => {
  it('Check for accessibility on load', () => {
    cy.mockMovieSearch();
    cy.mockMovieDetail_batman_begins();

    cy.visit(`${BASE_URL}/?q=Batman&oid=tt0372784`);
    cy.injectAxe();

    cy.wait('@mockMovieSearch');
    cy.wait('@mockMovieDetail_batman_begins');

    cy.wait(1000);

    cy.checkA11y();
  });
});
