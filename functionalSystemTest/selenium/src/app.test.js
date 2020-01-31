import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

let driver
beforeAll(async () => { 
     driver = await getDriver()
})

beforeEach(async () => { 
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

it('should enter value', async () => {
   let input = await driver.findElement(By.tagName('input'))
   expect(await input.getAttribute('value')).toBe('')
   await input.sendKeys('Cool')
   expect(await input.getAttribute('value')).toBe('Cool')

})

it('should display title', async () => {
   let input = await driver.findElement(By.tagName('input'))
   await input.sendKeys('Cool')
   expect(await driver.getTitle()).toBe('Cool')

})

it('should clear value', async () => {
   let input = await driver.findElement(By.tagName('input'))
   let value = await input.getAttribute('value')
   expect(value).toBe('')
   await input.sendKeys('Cool')
   await driver.findElement(By.id('submitDish')).click()
   expect(value).toBe('')
})

it('should display hello!', async () => {
   await driver.findElement(By.id('toggleButton')).click()
   expect(await driver.findElement(By.tagName('h2')).getText()).toBe('Hello!')
})

