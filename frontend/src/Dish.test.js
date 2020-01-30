import React  from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import Dish from "./Dish"



it('should exist', () => {
	expect (render(<Dish />))

})

it('should enter value ', () => {
	   render(<Dish />)
	   const whatTodo = screen.getByTestId('dish')
	   expect(whatTodo.value).toBe('')
        fireEvent.change(whatTodo, {
		target: {value: 'Cool Dish'},
	   })
	   expect(whatTodo.value).toBe('Cool Dish')
	})
	
it('should send value and clear filed ', async () => {
	 global.fetch = require('jest-fetch-mock')
      fetch.resetMocks()
	   render(<Dish />)
	   const whatTodo = screen.getByTestId('dish')
	   expect(whatTodo.value).toBe('')
        fireEvent.change(whatTodo, {
		target: {value: 'Cool Dish'},
	   })
	   const button = screen.getByText('Submit')
	   fireEvent.click(button)
	   expect(whatTodo.value).toBe('')
	   await  expect(fetch).toHaveBeenCalledWith("https://localhost:4598", {"body": {"value": "Cool Dish"}, "headers": {"Content-Type": "application/json"}, "method": "POST"})
	   fetch.resetMocks()
	})