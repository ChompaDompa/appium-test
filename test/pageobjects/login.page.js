class LoginPage {
    // Campo de nombre de usuario
    get inputUsername() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    }

    // Campo de contraseña
    get inputPassword() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    }

    //Botón "Iniciar sesión" - usando accessibility id (recomendado)
    get btnLogin() {
        return $('~Iniciar sesión');
    }

    // Notificación de inicio de sesión exitoso
    get btnnotification() {
        return $('id:com.android.permissioncontroller:id/permission_allow_button');
    }

    // Método para iniciar sesión
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await this.btnnotification.click();

    }
}

// Exportamos la instancia de la página
module.exports = new LoginPage();