import React from "react";
import { render, cleanup } from "react-testing-library";
import StaticRanges from "../index";
import defaultStaticRanges from "../../../utils/defaultStaticRanges";

afterEach(cleanup);

it("Renders StaticRanges properly", () => {
  const { getByText } = render(<StaticRanges ranges={defaultStaticRanges} />);
  const range = getByText("Today");
  expect(range.innerHTML).toEqual("Today");
});
