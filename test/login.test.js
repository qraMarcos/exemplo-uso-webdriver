import assert from 'node:assert';
import { Builder, Browser, By, Key, until } from 'selenium-webdriver';

describe('Testes do Módulo de Login', () => {
    it('Deve permitir o login quando usar credenciais válidas', async () => {
        
        // Arrange (Criar constantes com credenciais e mensagens esperadas)
        const driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://quick-notes.club')

        // Act (Interagir com a aplicação fazendo o login)
        await driver.findElement(By.id('login-email')).sendKeys('test@dor.com')
        await driver.findElement(By.id('login-password')).sendKeys('12345678',  Key.RETURN)

        // Assert (Validar que o teste passou)
        await driver.wait(until.elementIsVisible(driver.findElement(By.id('user-name'))), 5000)
        const saudacao = await driver.findElement(By.id('user-name')).getText();
        assert.equal(saudacao, 'Hi, Testador');
    })

})