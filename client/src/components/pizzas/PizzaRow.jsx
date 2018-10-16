import React from "react";
import PropTypes from "prop-types";
import "./PizzaRow.css";

export default function PizzaRow({ pizza }) {
  return (
    <li className="PizzaRow" key={pizza.id}>
      {pizza.name}
    </li>
  );
}

PizzaRow.propTypes = {
  pizza: PropTypes.object
};
