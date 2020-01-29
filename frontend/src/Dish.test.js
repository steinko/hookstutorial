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