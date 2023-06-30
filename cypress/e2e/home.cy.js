describe('Testes na Home', () => {
  it('Abre a página', () => {
    cy.visit('/')

    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    /* ==== End Cypress Studio ==== */
  })

  it('Abre a página Index', () =>{
     
    cy.visit('/index.html')
  
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Título da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.page-title').should('have.text', 'Arnold\'s Shoes');
    cy.get('.page-title').should('have.class', 'page-title');
    cy.get('.page-title').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})