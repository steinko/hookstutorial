import React  from 'react';
import { render } from "@testing-library/react";
import Welcome from "./Welcome"

it('should exist', () => {
	expect (render(<Welcome />))
})