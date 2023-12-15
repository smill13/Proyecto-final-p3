const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe("Create users", () => {
    it("Creación de usuarios", async function () {
        this.timeout(150000);
        let driver = new Builder()
            .forBrowser('MicrosoftEdge')
            .build();

        try {
            await driver.get('http://127.0.0.1:5500/HTML/CrearUsers.html');

            // Fill in the form fields with sample data
            await driver.findElement(By.id('username')).sendKeys('Example');
            await driver.findElement(By.id('Gmail')).sendKeys('sampleuser@example.com');
            await driver.findElement(By.id('password')).sendKeys('StrongPassword123');

            // Submit the form
            await driver.findElement(By.id('btnCrearUsers')).click();

            // Here you can add assertions based on the behavior you expect after submitting the form.
            // For example, you can check if the user is redirected to a new page.

        } finally {
            await driver.quit();
        }
    });
});
