import React from "react";
import "./PizzaCalculator.css";

export default class PizzaCalculator extends React.Component {
  constructor() {
    super();
    this.state = { numPizzas: 0 };
    this.onChange = ev => {
      this.setState({ numPizzas: Math.ceil(ev.target.value / 4) });
    };
  }
  render() {
    return (
      <div className="PizzaCalculator__container">
        <div className="PizzaCalculator__title">Calculator</div>
        <hr />
        <div className="PizzaCalculator__body">
          <div className="PizzaCalculator__inner_body">
            <input
              type="number"
              pattern="\A[0-9]+\z"
              onChange={this.onChange}
            />
            People = {this.state.numPizzas} Pizzas
          </div>
        </div>
      </div>
    );
  }
}
