describe('UI test', () => {
    it('should sign up and buy a product', () => {
      cy.visit('https://www.demoblaze.com');
      cy.wait(2000);
      ccy.get('button:contains("Sign up")').click();
      cy.get('#sign-username').type('user123');
      cy.get('#sign-password').type('pass123');
      cy.get('.modal-footer > .btn-primary').click();
      cy.wait(5000);
      cy.get('#login2').click();
      cy.get('#loginusername').type('user123');
      cy.get('#loginpassword').type('pass123');
      cy.get('button[onclick="logIn()"]')
        .click();
      cy.wait(8000);
      cy.contains('Samsung galaxy s6').click();
      cy.contains('Add to cart').click();
      cy.wait(3000);
      cy.get('#cartural').click();
      cy.contains('Place Order').click();
      cy.get('.modal-footer > .btn-primary').click();
    });
});

describe.skip('Demoblaze API Test', () => {
  it('logs in, adds product to cart and views cart', () => {
    const username = 'user123';
    const password = 'pass123';

    cy.request('POST', 'https://api.demoblaze.com/login', {
      username,
      password
    });
    
    cy.request('POST', 'https://api.demoblaze.com/add')
  });
});