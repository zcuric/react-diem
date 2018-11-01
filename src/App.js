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
        <div className="container">
          <h1>{format(date, "MM/dd/yyyy")}</h1>
          <div className="buttons">
            <button
              onClick={() =>
                this.setState(prevstate => ({
                  date: subMonths(prevstate.date, 1)
                }))
              }
            >
              {`<`}
            </button>
            <button
              onClick={() =>
                this.setState(prevstate => ({
                  date: addMonths(prevstate.date, 1)
                }))
              }
            >
              {`>`}
            </button>
          </div>
          <Month date={date} />
        </div>
      </div>
    );
  }
}

export default App;
