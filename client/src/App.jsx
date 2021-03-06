import React from "react";
import "./styles/App.css";

import PizzasContainer from "./components/pizzas/PizzasContainer";
import CalculatorContainer from "./components/calculator/CalculatorContainer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="AppName">Pizza Calculator</div>
      </header>
      <div className="AppBody">
        <PizzasContainer />
        <CalculatorContainer />
      </div>
    </div>
  );
}
