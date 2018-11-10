# react-diem

A composable react date range picker.
Relies on [`date-fns`](https://date-fns.org);

_In development._

#### Calendar options (for now):

- `date` - `new Date()`
- `dateFormat` - `date-fns` acceptable [formats](https://date-fns.org/v2.0.0-alpha.25/docs/format)
- `locale` - [`date-fns` locales](https://date-fns.org/v2.0.0-alpha.25/docs/I18n)

##### Example:

```
  <Calendar date={new Date()} locale={locale}>
    <DateSelect />
    <DisplayMonth />
    <DisplayRange />
    <NavigationButtons />
    <DayNames />
    <Month />
  </Calendar>
```

Try it on [CodeSanbox](https://codesandbox.io/s/github/zcuric/react-diem).
