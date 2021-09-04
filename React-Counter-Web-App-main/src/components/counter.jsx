import React, { Component } from "react";
class Counter extends React.Component {
  state = {
    count: 1,
    max: 1000,
  };

  width = 30;

  render() {
    return (
      <div>
        <form>
          <label>MAX:</label>
          <input type="number" id="maximum" onChange={this.setMaxValue} />
        </form>
        <div
          style={{
            margin: "auto",
            width: 3*this.width,
            height: "30px",
          }}
        >
          <span
            style={{
                border: "1px solid brown",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                color: "brown",
                width: this.width,
                height: "30px",
                display: "inline-block",
            }}
            onClick={this.decrement}
          >
            -
          </span>

          <span 
            style={{
                borderTop: "1px solid brown",
                borderBottom: "1px solid brown",
                color: "brown",
                background: "antiquewhite",
                width: this.width,
                height: "30px",
                display: "inline-block",
            }}
          >
            {this.state.count}
          </span>

          <span
            style={{
                border: "1px solid brown",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                color: "white",
                backgroundColor: "brown",
                width: this.width,
                height: "30px",
                display: "inline-block",
            }}
            onClick={this.increment}
          >
            +
          </span>
        </div>
        <p id="limit"></p>
      </div>
    );
  }
  setMaxValue = () => {
    this.setState({ max: document.getElementById("maximum").value, count: 1 });
    document.getElementById("limit").innerHTML = "<p></p>";
    // console.log("max=",this.state.max);
  };
  decrement = () => {
    console.log("decrement");
    if (this.state.count < this.state.max) {
        document.getElementById("limit").innerHTML = "";
    }
    this.setState({ count: this.state.count - 1 });
  };
  increment = () => {
    console.log("increment");
    if (this.state.count >= this.state.max) {
      document.getElementById("limit").innerHTML =
        "<p>Can't Exceed the maximum value</p>";
      console.log("Cant Exceed Maximum value ");
      return;
    } else this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
