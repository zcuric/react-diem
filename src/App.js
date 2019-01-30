import React from "react";
import { enUS as locale } from "date-fns/locale";
import "./App.css";
import Calendar from "./components/Calendar";
import Months from "./components/Months";
import DayNames from "./components/DayNames";
import NavigationButtons from "./components/NavigationButtons";
import DisplayRange from "./components/DisplayRange";
import DisplayMonth from "./components/DisplayMonth";
import DateSelect from "./components/DateSelect";
import StaticRanges from "./components/StaticRanges";
import DateInput from "./components/DateInput";
import defaultStaticRanges from "./utils/defaultStaticRanges";

const App = () => (
  <div className="App">
    <div className="container">
      <Calendar date={new Date()} locale={locale}>
        <DisplayMonth />
        <DisplayRange />
        <DateSelect />
        <DateInput />
        <StaticRanges ranges={defaultStaticRanges} />
        <NavigationButtons />
        <DayNames />
        <Months />
      </Calendar>
    </div>
  </div>
);

export default App;
