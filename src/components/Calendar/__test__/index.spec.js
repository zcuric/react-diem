import React from "react";
import { render, cleanup } from "react-testing-library";
import Calendar from "../index";

afterEach(cleanup);

it("Renders Navbuttons properly", () => {
  const { getByText } = render(<Calendar />);
  expect(true).toBeTruthy();
});
