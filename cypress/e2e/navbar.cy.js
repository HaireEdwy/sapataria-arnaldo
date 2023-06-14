describe('Testes da nav', () => {

            beforeEach(() => {
            cy.visit('/index.html');
        });
        it('Deve ter a classe .navbar', () => {
            cy.get('nav').should('have.class', 'navbar');

        });


        'Deve ter um atributo href válido para cada página', () => {
            cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
            cy.get('[data-test=sobre-nos]').should('have', 'href', './sobre-nos.html');
            cy.get('[data-test=catalogo]').should('have', 'href', './catalogo.html');
            cy.get('[data-test=login]').should('have', 'href', './login.html');
            cy.get('[data-test=contato]').should('have', 'href', './contato.html');

        };
    });