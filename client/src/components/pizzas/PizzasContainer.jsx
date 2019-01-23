import React from "react";
import axios from "axios";
import "./PizzasContainer.css";
import Calc from "./Calc";

import Pizzas from "./Pizzas";
import AddPizzaForm from "./AddPizzaForm";

class PizzasContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    };
    this.addNewPizza = this.addNewPizza.bind(this);
  }

  componentDidMount() {
    axios
      .get("api/v1/pizzas")
      .then(response => {
        console.log(response);
        this.setState({
          pizzas: response.data
        });
      })
      .catch(error => console.log(error));
  }

  addNewPizza(name, toppings) {
    axios
      .post("/api/v1/pizzas", { pizza: { name, toppings } })
      .then(response => {
        console.log(response);
        const pizzas = [...this.state.pizzas, response.data];
        this.setState({ pizzas });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="PizzaBox">
        <div className="PizzasContainer">
          <Pizzas pizzas={this.state.pizzas} />

          <AddPizzaForm onNewPizza={this.addNewPizza} />
        </div>
        <Calc />
      </div>
    );
  }
}

export default PizzasContainer;
