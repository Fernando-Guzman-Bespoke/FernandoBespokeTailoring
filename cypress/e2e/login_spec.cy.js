describe('Pruebas para la página de Login', () => {

    // Antes de cada prueba, visitar la página de inicio de sesión.
    beforeEach(() => {
      cy.visit('http://localhost:5173/'); // Reemplaza con la ruta correcta si es diferente
    });
  
    it('debería mostrar errores cuando los campos están vacíos', () => {
      // Intentar hacer clic en el botón de ingresar sin llenar ningún campo
      cy.get('button[type="button"]').click();
  
      // Verificar que se muestren los mensajes de error
      cy.contains('El email es obligatorio.').should('be.visible');
      cy.contains('La contraseña es obligatoria.').should('be.visible');
    });
  
    it('debería poder escribir en los campos de email y contraseña', () => {
      // Escribir en el campo de email
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="email"]').should('have.value', 'john@example.com');
  
      // Escribir en el campo de contraseña
      cy.get('input[name="password"]').type('123');
      cy.get('input[name="password"]').should('have.value', '123');
    });
  
    // it('debería mostrar un mensaje de error con credenciales inválidas', () => {
    //     // Simular respuesta de error del servidor con un status 400
    //     cy.intercept('POST', `http://localhost:5173/user/login`, {
    //       statusCode: 400
    //     }).as('loginRequest');
      
    //     // Rellenar los campos con credenciales inválidas
    //     cy.get('input[name="email"]').type('usuario@example.com');
    //     cy.get('input[name="password"]').type('contraseñaIncorrecta');
      
    //     // Hacer clic en el botón de ingresar
    //     cy.get('button[type="button"]').click();
      
    //     // Esperar a que se complete la solicitud de inicio de sesión
    //     cy.wait('@loginRequest');
      
    //     // Verificar que se muestra el mensaje de error
    //     cy.get('.error-message').should('contain', 'Usuario y/o contraseña incorrectos.');
    //   });
      
      
  
  });
  
  