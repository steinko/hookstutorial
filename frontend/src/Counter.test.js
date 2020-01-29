import React  from 'react';
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter"

it('should exist', () => {
	expect (render(<Counter />))
})

it ('should increment the count', () => {
	 const {getByText} = render(<Counter />)
	 expect(getByText('You clicked 0 times')).not.toBeNull()
	 const button = getByText('Click me')
	 fireEvent.click(button)
	 expect(getByText('You clicked 1 times')).not.toBeNull()



})