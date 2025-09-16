const LoginPage = require('../pageobjects/login.page');

describe('App Q10 - Prueba de ingreso de credenciales', () => {
    it('Debería poder iniciar sesión con credenciales válidas', async () => {
        // 1. Esperar y escribir en campo de usuario
        await LoginPage.inputUsername.waitForDisplayed({ timeout: 9000 });
        await LoginPage.inputUsername.setValue('steffmoviles');
        
        // 2. Escribir en campo de contraseña
        await LoginPage.inputPassword.waitForDisplayed({ timeout: 5000 });
        await LoginPage.inputPassword.setValue('steffmoviles');
        
        // 3. Hacer clic en el botón de inicio de sesión
        await LoginPage.btnLogin.waitForDisplayed({ timeout: 9000 });
        await LoginPage.btnLogin.click();
        await driver.pause(10000);

        // 4. Botón de notificación de inicio de sesión exitoso
        await LoginPage.btnnotification.click();

    });
});