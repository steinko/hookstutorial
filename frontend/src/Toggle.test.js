import React  from 'react';
import { render, screen, fireEvent} from "@testing-library/react";
import Toggle from "./Toggle"

it('should exist', () => {
	expect (render(<Toggle />))

})

it('should enter value ', () => {
	   const {getByText,queryByRole} = render(<Toggle />)
	   expect(queryByRole('h2')).toBeNull()
	   const button = getByText("Toggle")
	   fireEvent.click(button)
	   
	   expect(getByText('Hello!')).not.toBeNull()
	   fireEvent.click(button)
	   expect(queryByRole('h2')).toBeNull()
    })