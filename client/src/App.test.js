import { render, screen } from "@testing-library/react";

import App from "./App";

/* This is a test that is testing the App component. 
 * It is testing that the heading is correct. */
describe("App", () => {
  it("should have exact heading", () => {
    const { getByText } = render(<App/>);
    expect(getByText('welcome')).toBeInTheDocument();
   
  });
});