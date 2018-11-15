import React from "react";
import { render, cleanup } from "react-testing-library";
import NavigationButtons from "../index";

afterEach(cleanup);

it("Renders Navbuttons properly", () => {
  const { getByText } = render(<NavigationButtons />);
  const rightButton = getByText(">");
  expect(rightButton.innerHTML).toBe("&gt;");
  const left = getByText("<");
  expect(left.innerHTML).toBe("&lt;");
});
