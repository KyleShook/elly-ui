import React from "react";
import { render, cleanup } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";
import { colors } from "@theme";

// jest.clearAllMocks() clears all mocks and restores the original implementation.
afterEach(() => {
	jest.clearAllMocks();
});

// cleanup() removes all the mounted components from the DOM.
afterEach(() => {
	cleanup();
});
