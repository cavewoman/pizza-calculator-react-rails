import React from "react";

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
      <div class="PizzaCalculator__container">
        <div class="PizzaCalculator__title">Calculator</div>
        <hr />
        <div class="PizzaCalculator__body">
          <input type="number" pattern="\A[0-9]+\z" onChange={this.onChange} />
          People = {this.state.numPizzas} Pizzas
        </div>
      </div>
    );
  }
}
