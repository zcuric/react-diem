import React from "react";
import { render, cleanup } from "react-testing-library";
import Month from "../index";

afterEach(cleanup);

it("Renders Month properly", () => {
  const { getByText } = render(<Month date={new Date()} />);
  const element = getByText("1");
  expect(element.innerHTML).toBe("1");
});
