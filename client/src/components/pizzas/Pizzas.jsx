import React from "react";
import PropTypes from "prop-types";
import "./Pizzas.css";

import PizzaRow from "./PizzaRow";

export default function Pizzas({ pizzas }) {
  return (
    <div className="Pizzas">
      <ul>
        <li className="PizzaHeaderRow">Pizzas</li>
        {pizzas.map(pizza => {
          return <PizzaRow pizza={pizza} key={pizza.id} />;
        })}
      </ul>
    </div>
  );
}

Pizzas.propTypes = {
  pizzas: PropTypes.array
};
