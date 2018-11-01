import { isWithinInterval, compareAsc } from "date-fns";

export const isInInterval = (date, { start, end }) => {
  if (compareAsc(start, end) === 1) {
    return isWithinInterval(date, { start: end, end: start });
  }

  if (compareAsc(start, end) === -1) {
    return isWithinInterval(date, { start, end });
  }

  return false;
};

export default { isInInterval };
