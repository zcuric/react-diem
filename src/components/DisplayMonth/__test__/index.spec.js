import React from "react";
import { render, cleanup } from "react-testing-library";
import { format } from "date-fns";
import DisplayMonth from "..";

afterEach(cleanup);

it("Renders DisplayMonth properly", () => {
  const { getByText } = render(<DisplayMonth />);
  const month = format(new Date(), "MMMM Y.");
  expect(getByText(month).innerHTML).toContain(month);
});
