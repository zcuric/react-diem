import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import DateInput from "../index";
import { format } from "date-fns";

afterEach(cleanup);

it("Renders DateInput properly", () => {
  const { getByLabelText } = render(<DateInput />);
  const date = format(new Date(), "dd.MM.yyyy");
  expect(getByLabelText("Start date").value).toBe(date);
  expect(getByLabelText("End date").value).toBe(date);
});

it("Handles submit properly", () => {
  const { getByLabelText } = render(<DateInput />);
  const startDateInput = getByLabelText("Start date");
  const endDateInput = getByLabelText("End date");
  const submitButton = getByLabelText("End date");

  startDateInput.value = "10.10.2018";
  endDateInput.value = "20.10.2018";

  fireEvent.click(submitButton);

  expect(getByLabelText("Start date").value).toBe("10.10.2018");
  expect(getByLabelText("End date").value).toBe("20.10.2018");
});
