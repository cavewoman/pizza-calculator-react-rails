import React from "react";
import "./CalculatorContainer.css";
import SuggestionsContainer from "../suggestions/SuggestionsContainer"

class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPizzas: 0
    };
    this.calculatePizzas = this.calculatePizzas.bind(this);
  }

  calculatePizzas(e) {
    const people = e.target.value;
    const pizzas = Math.ceil((people * 2) / 8);
    this.setState({ numPizzas: pizzas });
  }

  render() {
    return (
      <div className="CalculatorContainer">
        <div className="CalculatorContainer__header">Calculator</div>
        <div className="CalculatorContainer__body">
          <input
            className="CalculatorContainer__input"
            type="number"
            onChange={evt => this.calculatePizzas(evt)}
          />{" "}
          People = {this.state.numPizzas} Pizzas
        </div>
        {this.state.numPizzas > 0 && <SuggestionsContainer numPizzas={this.state.numPizzas}/>}
      </div>
    );
  }
}

export default CalculatorContainer;
