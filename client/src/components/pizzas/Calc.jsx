import React from "react";

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
      <div>
        <p>Calculaterrr</p>
        <input type="number" onChange={this.calculatePizza} />
        <span>People = {this.state.numberOfPizzas} Pizza</span>
      </div>
    );
  }
}
