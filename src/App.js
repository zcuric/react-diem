import React, { Component } from "react";
import "./App.css";
import { addMonths, subMonths, format } from "date-fns";
import Month from "./components/Month";

class App extends Component {
  state = {
    date: new Date()
  };

  render() {
    const { date } = this.state;
    return (
      <div className="App">
        <h1>{format(date, "MM/dd/yyyy")}</h1>
        <button
          onClick={() =>
            this.setState(prevstate => ({ date: subMonths(prevstate.date, 1) }))
          }
        >
          -
        </button>
        <Month date={date} />
        <button
          onClick={() =>
            this.setState(prevstate => ({ date: addMonths(prevstate.date, 1) }))
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
