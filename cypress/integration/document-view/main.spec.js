/// <reference types="cypress" />

describe('Main content', () => {
  it('should display skeleton UI', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('POST', 'https://graphql.sketch.cloud/api', {
      statusCode: 200,
      body: [],
    }).as('getArtboards');
    cy.get('[data-testid=skeleton-artboard-thumbnail]').should('have.length', 3);
  });

  describe('Code test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('should have 16 artboards', () => {
      cy.get('[data-testid=document-artboard-thumbnail]').should('have.length', 16);
    });

    it('should open artboard on click', () => {
      cy.get('[data-testid=document-artboard-thumbnail] h2').contains('Android').click();
      cy.url().should('eq', 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Android');
      cy.visit('http://localhost:3000');
      cy.get('[data-testid=document-artboard-thumbnail] h2').contains('Etch a Sketch').click();
      cy.url().should(
        'eq',
        'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Etch%20a%20Sketch'
      );
    });
  });

  describe('Code test bonus', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/document/40432a93-5434-4059-87b9-545fd1ad6ee0');
    });

    it('should have 2 artboards', () => {
      cy.get('[data-testid=document-artboard-thumbnail]').should('have.length', 2);
    });
  });
});
