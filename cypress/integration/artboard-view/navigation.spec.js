/// <reference types="cypress" />

describe('Navigation', () => {
  describe('Navigation', () => {
    it('should display skeleton UI', () => {
      cy.visit('http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Apple%20II');
      cy.intercept('POST', 'https://graphql.sketch.cloud/api', {
        statusCode: 200,
        body: [],
      }).as('getArtboards');

      cy.get('header [data-testid=skeleton-string]').should('exist');
    });

    it('should display the correct numbers on the "counter"', () => {
      cy.visit('http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Xerox%20alto');
      cy.get('[data-testid=navigation-current-number]').should('have.text', '1');
      cy.get('[data-testid=navigation-total-number]').should('have.text', '16');
      cy.get('[data-testid=navigation-next-button]').click();
      cy.get('[data-testid=navigation-current-number]').should('have.text', '2');
      cy.get('[data-testid=navigation-total-number]').should('have.text', '16');
      cy.get('[data-testid=navigation-previous-button]').click();
      cy.get('[data-testid=navigation-current-number]').should('have.text', '1');
      cy.get('[data-testid=navigation-total-number]').should('have.text', '16');
    });

    describe('should be able to', () => {
      beforeEach(() => {
        cy.intercept('POST', 'https://graphql.sketch.cloud/api').as('getArtboards');
        cy.visit('http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Windows%20Vista');
        cy.wait('@getArtboards');
      });

      it('go to the previous artboard', () => {
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Windows%20Vista'
        );
        cy.get('[data-testid=navigation-previous-button]').click();
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Win%201984'
        );
        cy.get('h1').should('have.text', 'Win 1984');
      });

      it('go to the next artboard', () => {
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Windows%20Vista'
        );
        cy.get('[data-testid=navigation-next-button]').click();
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Windows%20Phonw'
        );
        cy.get('h1').should('have.text', 'Windows Phonw');
      });
    });

    describe('on the first artboard', () => {
      beforeEach(() => {
        cy.intercept('POST', 'https://graphql.sketch.cloud/api').as('getArtboards');
        cy.visit('http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Xerox%20alto');
        cy.wait('@getArtboards');
      });

      it('should go to the next artboard', () => {
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Xerox%20alto'
        );
        cy.get('[data-testid=navigation-next-button]').click();
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Etch%20a%20Sketch'
        );
      });

      it('should not be able to go to the previous artboard', () => {
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Xerox%20alto'
        );
        cy.get('[data-testid=navigation-previous-button]').click();
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Xerox%20alto'
        );
      });
    });

    describe('on the last artboard', () => {
      beforeEach(() => {
        cy.intercept('POST', 'https://graphql.sketch.cloud/api').as('getArtboards');
        cy.visit('http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/AmigaOS');
        cy.wait('@getArtboards');
      });

      it('should go to the previous artboard', () => {
        cy.url().should('eq', 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/AmigaOS');
        cy.get('[data-testid=navigation-previous-button]').click();
        cy.url().should(
          'eq',
          'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/iPhone%203'
        );
      });

      it('should not be able to go to the next artboard', () => {
        cy.url().should('eq', 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/AmigaOS');
        cy.get('[data-testid=navigation-next-button]').click();
        cy.url().should('eq', 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/AmigaOS');
      });
    });
  });

  describe('Artboard', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Apple%20II');
    });

    it('should display skeleton UI', () => {
      cy.intercept('POST', 'https://graphql.sketch.cloud/api', {
        statusCode: 200,
        body: [],
      }).as('getArtboards');

      cy.get('[data-testid=skeleton-image]').should('exist');
    });

    it('title should match route', () => {
      cy.get('h1').should('have.text', 'Apple II');
    });

    it('should be closed when clicking the close button', () => {
      cy.url().should('eq', 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/Apple%20II');
      cy.get('[data-testid=close-artboard-button]').click();
      cy.url().should('eq', 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992');
    });
  });
});
