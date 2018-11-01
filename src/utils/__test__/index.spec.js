import utils from "../index";

describe("isInInterval", () => {
  it("returns false if start and end date are equal", () => {
    expect(
      utils.isInInterval(new Date(), { start: new Date(), end: new Date() })
    ).toBeFalsy();
  });

  it("returns true if date is within interval", () => {
    expect(
      utils.isInInterval(new Date(2018, 11, 1), {
        start: new Date(2018, 10, 31),
        end: new Date(2018, 11, 15)
      })
    ).toBeTruthy();
  });

  it("returns true if date is within interval, start date is after end date", () => {
    expect(
      utils.isInInterval(new Date(2018, 11, 1), {
        start: new Date(2018, 11, 15),
        end: new Date(2018, 10, 31)
      })
    ).toBeTruthy();
  });

  it("returns false if date is outside of interval", () => {
    expect(
      utils.isInInterval(new Date(2018, 9, 1), {
        start: new Date(2018, 10, 31),
        end: new Date(2018, 11, 15)
      })
    ).toBeFalsy();
  });
});
