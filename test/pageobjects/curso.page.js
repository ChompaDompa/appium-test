// test/pageobjects/curso.page.js
class CursoPage {
  // ======== Curso principal ========
  get cursoMoviles() {
    return $('~Moviles Automatización, Móviles,  lu 8-8:30am , Principal - Mañana, Móviles');
  }

  async seleccionarCursoMoviles() {
    await this.cursoMoviles.waitForDisplayed({ timeout: 10000 });
    await this.cursoMoviles.click();
  }

  async seleccionarEstudiantes() {
    const btn = $('//android.widget.TextView[@text="Moviles Tres Estudiante"]');
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
  }

  // ======== Modal de Notas ========
  get btnParametro1() {
    return $('//android.widget.TextView[@text="Parametro 1"]');
  }

  get modalNotas() {
    return $('//android.view.ViewGroup[@resource-id="AnimatedView" or @resource-id="Modal" or @content-desc="Parametro 1"]');
  }

  get notaInput() {
    return this.modalNotas.$('.//android.widget.EditText[@resource-id="text-input-outlined"]');
  }

  get btnGuardar() {
    return $('~Guardar');
  }

  async abrirParametro1() {
    await this.btnParametro1.waitForDisplayed({ timeout: 10000 });
    await this.btnParametro1.click();
    await this.modalNotas.waitForDisplayed({ timeout: 10000 });
    await this.notaInput.waitForDisplayed({ timeout: 10000 });
  }

  async ingresarNotas(valor = '5') {
    await this.abrirParametro1();
    await this.notaInput.clearValue();
    await this.notaInput.setValue(valor);
    try { await driver.hideKeyboard(); } catch {}
    await this.btnGuardar.click();
    await this.modalNotas.waitForDisplayed({ reverse: true, timeout: 10000 });
  }

  async editarNotas(valor = '3.5') {
    await this.abrirParametro1();
    try {
      await this.notaInput.clearValue();
      await this.notaInput.setValue(valor);
    } catch {
      await this.notaInput.replaceValue?.(valor);
    }
    try { await driver.hideKeyboard(); } catch {}
    await this.btnGuardar.click();
    await this.modalNotas.waitForDisplayed({ reverse: true, timeout: 10000 });
  }

  async eliminarNotas() {
    await this.abrirParametro1();
    try {
      await this.notaInput.clearValue();
    } catch {
      if (this.notaInput.replaceValue) {
        await this.notaInput.replaceValue('');
      } else {
        await this.notaInput.setValue('');
      }
    }
    try { await driver.hideKeyboard(); } catch {}
    await this.btnGuardar.click();
    await this.modalNotas.waitForDisplayed({ reverse: true, timeout: 10000 });
  }

  // ======== Modal de Observaciones ========
  get modalObservaciones() {
    return $('//android.view.ViewGroup[@resource-id="Modal" or @resource-id="AnimatedView"]');
  }

  get observacionesInput() {
    return this.modalObservaciones.$('.//android.widget.EditText[@resource-id="text-input-outlined"]');
  }

  async abrirObservaciones() {
    const btn = $('//com.horcrux.svg.SvgView[@resource-id="phosphor-react-native-pencil-simple-duotone"]');
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.click();
    await this.modalObservaciones.waitForDisplayed({ timeout: 10000 });
    await this.observacionesInput.waitForDisplayed({ timeout: 10000 });
  }

  async ingresarObservaciones(valor = 'Observación de prueba') {
    await this.abrirObservaciones();
    await this.observacionesInput.clearValue();
    await this.observacionesInput.setValue(valor);
    try { await driver.hideKeyboard(); } catch {}
    await this.btnGuardar.click();
    await this.modalObservaciones.waitForDisplayed({ reverse: true, timeout: 10000 });
  }

  async editarObservaciones(valor = 'Observación editada') {
    await this.abrirObservaciones();
    try {
      await this.observacionesInput.clearValue();
      await this.observacionesInput.setValue(valor);
    } catch {
      await this.observacionesInput.replaceValue?.(valor);
    }
    try { await driver.hideKeyboard(); } catch {}
    await this.btnGuardar.click();
    await this.modalObservaciones.waitForDisplayed({ reverse: true, timeout: 10000 });
  }

  async eliminarObservaciones() {
    await this.abrirObservaciones();
    try {
      await this.observacionesInput.clearValue();
    } catch {
      if (this.observacionesInput.replaceValue) {
        await this.observacionesInput.replaceValue('');
      } else {
        await this.observacionesInput.setValue('');
      }
    }
    try { await driver.hideKeyboard(); } catch {}
    await this.btnGuardar.click();
    await this.modalObservaciones.waitForDisplayed({ reverse: true, timeout: 10000 });
  }
}

module.exports = new CursoPage();
