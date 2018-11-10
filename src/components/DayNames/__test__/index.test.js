import React from "react";
import { render, cleanup } from "react-testing-library";
import DayName from "..";

afterEach(cleanup);

it("Renders day labels properly", () => {
  const { getByText } = render(<DayName />);
  expect(getByText("Mon").innerHTML).toContain("Mon");
  expect(getByText("Sun").innerHTML).toContain("Sun");
});
