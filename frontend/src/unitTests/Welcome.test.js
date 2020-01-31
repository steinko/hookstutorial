import React  from 'react';
import { render } from "@testing-library/react";
import Welcome from "../components/Welcome"

it('should exist', () => {
	expect (render(<Welcome />))
})