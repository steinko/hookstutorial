import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

it('should count when clicking', async () => {
	 const driver = await getDriver()
	 await driver.get(getHostName())
	 let display = await driver.findElement(By.tagName('p'))
	 expect(await display.getText()).toContain('You clicked 0 times')
	 const button = await driver.findElement(By.tagName('button'))
	 button.click()
	 display = await driver.findElement(By.tagName('p'))
	 expect(await display.getText()).toContain('You clicked 1 times')
	 
})