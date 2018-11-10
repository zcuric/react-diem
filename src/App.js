import React from "react";
import { hr as locale } from "date-fns/locale";
import "./App.css";
import Calendar from "./components/Calendar";
import Month from "./components/Month";
import DayNames from "./components/DayNames";
import NavigationButtons from "./components/NavigationButtons";
import DisplayRange from "./components/DisplayRange";
import DisplayMonth from "./components/DisplayMonth";
import DateSelect from "./components/DateSelect";

const App = () => (
  <div className="App">
    <div className="container">
      <Calendar date={new Date()} locale={locale} weekStartsOn={0}>
        <DateSelect />
        <DisplayMonth />
        <DisplayRange />
        <NavigationButtons />
        <DayNames />
        <Month />
      </Calendar>
    </div>
  </div>
);

export default App;
