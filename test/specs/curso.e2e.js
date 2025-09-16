const LoginPage = require('../pageobjects/login.page');
const CursoPage = require('../pageobjects/curso.page');

describe('App Q10 - Flujo de selección de curso', () => {
  before(async () => {
    await LoginPage.inputUsername.setValue('steffmoviles');
    await LoginPage.inputPassword.setValue('steffmoviles');
    await LoginPage.btnLogin.click();
    await LoginPage.btnnotification.click();
    await CursoPage.seleccionarCursoMoviles();
    await CursoPage.seleccionarEstudiantes();
  });

  it('Debería asignar nota', async () => {
    await CursoPage.ingresarNotas('5');
  });

  it('Debería editar la nota', async () => {
    await CursoPage.editarNotas('3.5');
  });

  it('Debería eliminar la nota', async () => {
  await CursoPage.eliminarNotas();
  });

  it('Debería ingresar observaciones', async () => {
    await CursoPage.ingresarObservaciones('Observación de prueba');
  });

  it('Debería editar observaciones', async () => {
    await CursoPage.editarObservaciones('Observación editada de prueba');
  });

  it ('Debería eliminar observaciones', async () => {
    await CursoPage.eliminarObservaciones();
  });
    
});
