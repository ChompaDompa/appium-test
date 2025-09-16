class EstudiantePage {


  async seleccionarEstudiantes() {
    const btn = $('//android.view.View[@content-desc="Estudiantes"]/android.view.ViewGroup/android.view.ViewGroup');
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

    async seleccionarEstudiante() {
    const btn = $('//android.widget.TextView[@text="Moviles Tres estudiante"]');
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async seleccionarObservaciones() {
    const btn = $('//android.view.ViewGroup[@resource-id="fab-content"]');
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  async abrirCriterio() {
    const campo = $('//android.view.ViewGroup[@content-desc="Criterio *"]');
    await campo.waitForDisplayed({ timeout: 10000 });
    await campo.click(); // <-- necesario para abrir la lista
  }

  // Genérico: selecciona un criterio por texto exacto
  async seleccionarCriterio(texto) {
    await this.abrirCriterio();
    const opcion = $(`//android.widget.TextView[@text="${texto}"]`);
    await opcion.waitForDisplayed({ timeout: 15000 });
    await opcion.click();
  }

  // Si quieres mantener el nombre original:
  async ingresarCriterio() {
    await this.seleccionarCriterio('Mal comportamiento en el aula de clase del profesor');
  }

  async seleccionarPrograma() {
    const btn = $('//android.view.ViewGroup[@content-desc="Programa *"]');
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
    const opcion = $('//android.widget.TextView[@text="Programa Móviles"]');
    await opcion.waitForDisplayed({ timeout: 10000 });
    await opcion.click();
  }

  async seleccionarPeriodo() {
    const campo = $('//android.view.ViewGroup[@content-desc="Período *"]');
    await campo.waitForDisplayed({ timeout: 10000 });
    await campo.click();
    const opcion = $('//android.widget.TextView[@text="Móviles"]');
    await opcion.waitForDisplayed({ timeout: 10000 });
    await opcion.click();
  }

    async ingresarDescripcion(descripcion) {
  // 1) abre/focaliza el campo (ajusta el content-desc a tu etiqueta)
  const cont = $('(//android.widget.EditText[@resource-id="text-input-outlined"])[2]');
  await cont.waitForDisplayed({ timeout: 10000 });
  await cont.click();

  // 2) toma el EditText dentro del contenedor (sin @text fijo)
  const input = cont.$('.//android.widget.EditText');
  await input.waitForDisplayed({ timeout: 10000 });
  await input.click();
  await input.setValue(descripcion); 
    }


    async guardarObservacion() {
    const btn = $('//android.view.ViewGroup[@content-desc="Aceptar"]');
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }







}

module.exports = new EstudiantePage();
