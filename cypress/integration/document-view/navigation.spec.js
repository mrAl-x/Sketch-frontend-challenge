/// <reference types="cypress" />

describe('Navigation', () => {
  it('should display skeleton UI', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('POST', 'https://graphql.sketch.cloud/api', {
      statusCode: 200,
      body: [],
    }).as('getArtboards');
    cy.get('header [data-testid=skeleton-string]').should('exist');
  });

  describe('Code test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('should have a title', () => {
      cy.get('h1').should('have.text', 'Code test');
    });
  });

  describe('Code test bonus', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/document/40432a93-5434-4059-87b9-545fd1ad6ee0');
    });

    it('should have a title', () => {
      cy.get('h1').should('have.text', 'Code test (bonus)');
    });
  });
});
