import React from "react";
import { render, cleanup } from "react-testing-library";
import DayName from "../DayName";

afterEach(cleanup);

it("Renders day labels properly", () => {
  const { getByText } = render(<DayName date={new Date()} />);
  expect(getByText("Mon").innerHTML).toContain("Mon");
});
