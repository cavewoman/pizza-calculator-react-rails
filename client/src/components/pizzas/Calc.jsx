import React from "react";
import "./CalcInput.css";

export default class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfPizzas: 0,
      numberOfPeople: 0
    };
    this.calculatePizza = this.calculatePizza.bind(this);
  }

  calculatePizza(event) {
    const num = Math.round((event.target.value * 2) / 8);
    this.setState({ numberOfPizzas: num });
  }

  render() {
    return (
      <div className="PizzaCalcBox">
        <div className="PizzaHeaderRow">Calculaterrr</div>
        <div className="PizzaCalc">
          <input
            className="PizzaCalcInput"
            type="text"
            onChange={this.calculatePizza}
          />
          <span className="PizzaCalcSpan">
            People = {this.state.numberOfPizzas} Pizza
          </span>
        </div>
      </div>
    );
  }
}
