import React from "react";
import { render, cleanup } from "react-testing-library";
import Day from "..";

afterEach(cleanup);

it("Renders day properly", () => {
  const selectedDates = {
    start: new Date(2018, 10, 1),
    end: new Date(2018, 11, 2)
  };
  const { getByText } = render(
    <Day
      date={new Date(2018, 11, 1)}
      day={new Date(2018, 11, 1)}
      selectedDates={selectedDates}
    />
  );
  expect(getByText("1").innerHTML).toContain("1");
});
