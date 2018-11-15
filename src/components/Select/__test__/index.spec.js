import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Select from "../index";

afterEach(cleanup);

test("Select", () => {
  const onChange = jest.fn();
  const { container } = render(
    <Select
      value={10}
      options={[{ value: 10, label: 10 }, { value: 11, label: 11 }]}
      onChange={onChange}
    />
  );
  const select = container.firstChild;
  expect(select.value).toBe("10");
  fireEvent.change(select, {
    target: { value: 11 }
  });

  expect(onChange).toBeCalled();
});
