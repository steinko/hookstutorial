import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

let driver
beforeAll(async () => { 
     driver = await getDriver()
	 await driver.get(getHostName())
})

it('should count when clicking', async () => {
	 
	 let display = await driver.findElement(By.tagName('p'))
	 expect(await display.getText()).toContain('You clicked 0 times')
	 const button = await driver.findElement(By.tagName('button'))
	 button.click()
	 display = await driver.findElement(By.tagName('p'))
	 expect(await display.getText()).toContain('You clicked 1 times')
	 
})

xit('should enter value', async () => {
   let input = await driver.findElement(By.tagName('input'))
   expect(input.getAttribute('value')).toBe('')
   input.sendKeys('Cool')
   expect(input.getAttribute('value')).toBe('Cool')

})