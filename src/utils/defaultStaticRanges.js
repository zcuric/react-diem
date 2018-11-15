import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subDays,
  subWeeks,
  subMonths
} from "date-fns";

export default [
  {
    label: "Today",
    start: new Date(),
    end: new Date()
  },
  {
    label: "Yesterday",
    start: subDays(new Date(), 1),
    end: subDays(new Date(), 1)
  },
  {
    label: "This week",
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date())
  },
  {
    label: "Last week",
    start: startOfWeek(subWeeks(new Date(), 1)),
    end: endOfWeek(subWeeks(new Date(), 1))
  },
  {
    label: "This month",
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date())
  },
  {
    label: "Last month",
    start: startOfMonth(subMonths(new Date(), 1)),
    end: endOfMonth(subMonths(new Date(), 1))
  }
];
