import React from "react";

import "./AddPizzaButton.css";
import AddPizzaForm from "./AddPizzaForm";

export default class AddPizzaButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props);
    this.state = {
      showAddForm: false
    };
    this.addNewPizza = props.addNewPizza.bind(this);
  }

  handleClick = () => {
    console.log("CLICKED");
    this.setState({
      showAddForm: true
    });
  };

  render() {
    return (
      <div class="AddPizzaButton">
        <AddPizzaForm onNewPizza={this.addNewPizza} />
      </div>
    );
  }
}
