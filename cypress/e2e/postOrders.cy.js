describe('Ingreso al sistema y prueba de pedidos', () => {

   beforeEach(() => {
       // Visita la página de inicio de sesión. Ajusta la URL como sea necesario.
       cy.visit('http://localhost:5173/user/login');
   });


   it('debería poder iniciar sesión y acceder a la página de pedidos', () => {
       cy.get('input[name="email"]').type('john@example.com');
       cy.get('input[name="email"]').should('have.value', 'john@example.com');
 
       // Escribir en el campo de contraseña
       cy.get('input[name="password"]').type('123');
       cy.get('input[name="password"]').should('have.value', '123');
       cy.get('button[type="button"]').click({ force: true });
       
       
       // Aquí comienzan las pruebas de pedidos
       cy.get('.WhiteContainer').should('exist');
       cy.get('.UnderTitle').should('have.length', 3);

   });
});
