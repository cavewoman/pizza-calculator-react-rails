import React from "react";
import "./AddPizzaForm.css";

function AddPizzaForm({ onNewPizza = f => f }) {
  let name;
  let toppings;
  const submit = e => {
    e.preventDefault();
    onNewPizza(name.value, toppings.value);
    name.value = "";
    toppings.value = "";
    name.focus();
  };

  return (
    <form className="AddPizzaForm" onSubmit={submit}>
      <input
        ref={input => (name = input)}
        type="text"
        placeholder="Name"
        required
        className="AddPizzaForm__input AddPizzaForm__input--name"
      />
      <input
        ref={input => (toppings = input)}
        type="text"
        placeholder="Toppings"
        required
        className="AddPizzaForm__input AddPizzaForm__input--toppings"
      />
      <button className="AddPizzaForm__submit">+</button>
    </form>
  );
}

export default AddPizzaForm;
