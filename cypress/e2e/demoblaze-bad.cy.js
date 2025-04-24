describe('User test', () => {
    it('should sign up and buy a product', () => {
      cy.visit('https://www.demoblaze.com');
      cy.wait(10000);
      cy.get('#signin2').click();
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
      cy.get('#cartur').click();
      cy.contains('Place Order').click();
      cy.get('#name').type('John');
      cy.get('#card').type('123456');
      cy.get('.modal-footer > .btn-primary').click();
    });
});