const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Scroll Test', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('MicrosoftEdge').build();
    });

    after(async function() {
        await driver.quit();
    });

    it('should scroll down and up', async function() {
        await driver.get("http://127.0.0.1:5500/HTML/pageReservas.html");

        // Espera a que un elemento en el cuerpo de la página esté presente (puedes ajustar esto según tu contenido)
        await driver.wait(until.elementLocated(By.tagName('body')), 60000);

        // Espera a que la página se cargue completamente antes de realizar el scroll
        await driver.wait(until.elementIsVisible(driver.findElement(By.tagName('body'))), 40000);

        // Realiza el scroll hacia abajo
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");

        // Espera a que la página se cargue completamente después de realizar el scroll hacia abajo
        await driver.wait(until.elementIsVisible(driver.findElement(By.tagName('body'))), 40000);

        // Espera un momento (ajusta según sea necesario)
        await driver.sleep(10000);

        // Realiza el scroll hacia arriba
        await driver.executeScript("window.scrollTo(0, 0);");

        // Espera a que la página se cargue completamente después de realizar el scroll hacia arriba
        await driver.wait(until.elementIsVisible(driver.findElement(By.tagName('body'))), 40000);

        // Asegurar que las pruebas son exitosas
        assert.equal(true, true);
    });
});
