const EstudiantePage = require('../pageobjects/estudiante.page');
const LoginPage = require('../pageobjects/login.page');

describe('App Q10 - Flujo de estudiante, Observaciones', () => {

before(async () => {
    await LoginPage.inputUsername.setValue('steffmoviles');
    await LoginPage.inputPassword.setValue('steffmoviles');
    await LoginPage.btnLogin.click();
    await LoginPage.btnnotification.click();
    await EstudiantePage.seleccionarEstudiantes();
    await EstudiantePage.seleccionarEstudiante();
    await EstudiantePage.seleccionarObservaciones();

});

    it('Debería seleccionar criterio', async () => {
    await EstudiantePage.seleccionarCriterio('Mal comportamiento en el aula de clase del profesor');
    });

    it('Debería seleccionar Programa', async () => {
    await EstudiantePage.seleccionarPrograma('Programa Móviles');
    });

    it('Debería ingresar periodo', async () => {
        await EstudiantePage.seleccionarPeriodo('Móviles');
    });

    it('Debería ingresar descripción', async () => {
        await EstudiantePage.ingresarDescripcion('Mal comportamiento en el aula de clase del profesor');
    });


    it('Debería guardar la observación', async () => {
        await EstudiantePage.guardarObservacion();
    });


});