import React from "react";
import { render, cleanup } from "react-testing-library";
import { format } from "date-fns";
import DisplayRange from "..";

afterEach(cleanup);

it("Renders  properly", () => {
  const { getByText } = render(<DisplayRange />);
  const month = format(new Date(), "dd.MM.yyyy");
  expect(getByText(`${month} - ${month}`).innerHTML).toContain(
    `${month} - ${month}`
  );
});
