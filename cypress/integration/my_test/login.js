describe('Тестирование формs логина', function () {
    it('Позитивный тест на верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
     
     it('Позитивный тест на восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('nanabaikonur@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
     })    
      
    it('Негативный тест на ввод верного логина и неверного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.reload();
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
     })

     it('Негативный тест на ввод неверного логина и верного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.reload();
        cy.get('#mail').type('german@dolnikof.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
     })

     it('Позитивный тест на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.reload();
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
     })
})
 