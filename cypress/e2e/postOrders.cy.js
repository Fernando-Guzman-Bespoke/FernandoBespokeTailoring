describe('Ingreso al sistema y prueba de pedidos', () => {

   beforeEach(() => {
       // Visita la página de inicio de sesión. Ajusta la URL como sea necesario.
       cy.visit('http://localhost:5173/user/login');
   });

//    it('debería poder escribir en los campos de email y contraseña', () => {
//        // Escribir en el campo de email
//        cy.get('input[name="email"]').type('john@example.com');
//        cy.get('input[name="email"]').should('have.value', 'john@example.com');
 
//        // Escribir en el campo de contraseñaxxxxxxx
//        cy.get('input[name="password"]').type('123');
//        cy.get('input[name="password"]').should('have.value', '123');
//    });

   it('debería poder iniciar sesión y acceder a la página de pedidos', () => {
       // Supongo que hay un botón para enviar el formulario de inicio de sesión.
       cy.get('input[name="email"]').type('john@example.com');
       cy.get('input[name="email"]').should('have.value', 'john@example.com');
 
       // Escribir en el campo de contraseña
       cy.get('input[name="password"]').type('123');
       cy.get('input[name="password"]').should('have.value', '123');
       cy.get('button[type="button"]').click({ force: true });
       
       // Espera a que se cargue la página de pedidos y verifica su contenido.
    //    cy.url().should('include', 'http://localhost:5173/IngresoPedido'); 
    //    cy.visit('http://localhost:5173/IngresoPedido');
    // cy.location('pathname').should('eq', 'http://localhost:5173/IngresoPedido');
       
       // Aquí comienzan las pruebas de pedidos
       cy.get('.WhiteContainer').should('exist');
       cy.get('.UnderTitle').should('have.length', 3);

    //    const botonCuelloCheckbox = cy.get('input[title="Botón en el Cuello"]');
    //     botonCuelloCheckbox.check().should('be.checked');
    //     botonCuelloCheckbox.uncheck().should('not.be.checked');
    
    // it('debería marcar y desmarcar la opción "Botón en el Cuello"', () => {
    //     const botonCuelloCheckbox = cy.get('input[title="Botón en el Cuello"]');
    //     botonCuelloCheckbox.check().should('be.checked');
    //     botonCuelloCheckbox.uncheck().should('not.be.checked');
    // });
    //  it('debería escribir en el campo de notas', () => {
    //     cy.get('textarea[title="Notas"]').type('Estas son algunas notas de prueba.');
    // });
    // it('debería ingresar una fecha de pedido', () => {
    //     // Esto depende de cómo hayas implementado DateInput. Si es un simple input:
    //     cy.get('input[title="Fecha"]').type('2023-09-05');
    // });
   });
});
