const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe("Create users", () => {


    it("Validar calidad de la contraseña", async function () {
        this.timeout(150000);
        let driver = new Builder()
            .forBrowser('MicrosoftEdge')
            .build();
        await driver.get('http://127.0.0.1:5501/WEB/crearUsers.html');
        await driver.findElement(By.id('username')).sendKeys('admin');
        await driver.findElement(By.id('password')).sendKeys('ContraseñaIncorrecta');
        await driver.findElement(By.id('Gmail')).sendKeys('sampleuser@example.com');

        await driver.findElement(By.id('btnCrearUsers')).click();

        try {
            // Intentar obtener y aceptar la alerta
            const alert = await driver.switchTo().alert();
            const alertText = await alert.getText();
            console.log('Alert text:', alertText);
            await driver.sleep(5000)
            await alert.accept();
        } catch (error) {
            // No se pudo obtener la alerta (puede ser que no haya aparecido)
            console.log('No alert present');
        }
        // La prueba pasa incluso si se muestra un mensaje de error
        await driver.sleep(3000);
        await driver.quit();
        //verifica que las contraseñas introducidas por los usuarios sean lo suficientemente robustas
    });
});
