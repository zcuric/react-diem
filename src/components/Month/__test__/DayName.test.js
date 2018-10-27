import React from "react";
import { render, cleanup } from "react-testing-library";
import DayName from "../DayName";

afterEach(cleanup);

it("Renders day labels properly", () => {
  const { getByText } = render(<DayName date={new Date()} />);
  const element = getByText("Mon");
  expect(element.innerHTML).toBe("Mon");
});
