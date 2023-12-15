const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe("Login", () => {
    it("Login with standerd_user credentials", async function () {
        this.timeout(150000);
        let driver = new Builder()
            .forBrowser('MicrosoftEdge')
            .build();

        try {
            await driver.get('http://127.0.0.1:5500/HTML/pageLogin.html');

            // Cambiado de 'username' a 'floatingInput'
            await driver.findElement(By.id('floatingInput')).sendKeys('Smill');
            await driver.findElement(By.id('floatingPassword')).sendKeys('Admin');
            await driver.findElement(By.css('.btn.btn-primary')).click();

            // Aquí puedes agregar aserciones según la lógica de tu aplicación.
            // Por ejemplo, puedes verificar que la página de destino se cargó correctamente.

        } finally {
            await driver.quit();
        }
    });
});
