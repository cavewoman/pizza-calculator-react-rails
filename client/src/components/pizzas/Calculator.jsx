import React from 'react'
import './Calculator.css'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people_count: 0,
      suggestions: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.calculatePizzas = this.calculatePizzas.bind(this)
    this.suggest = this.suggest.bind(this)
  }

  handleChange(event) {
    this.setState({ people_count: event.target.value })
  }

  calculatePizzas() {
    return Math.ceil((this.state.people_count * 2) / 8)
  }

  suggest() {
    this.setState({ suggestions: ['cheese', 'pepperoni'] })
  }

  render() {
    return (
      <div className="Calculator">
        <div className="header">Calculator</div>
        <form>
          <input onChange={this.handleChange} type="text" id="people_count" />
          <label className="extra-spacing" for="people_count">
            People
          </label>
          =
          <span className="extra-spacing" id="pizza_count">
            {this.calculatePizzas()} Pizzas
          </span>
        </form>

        {this.state.people_count > 0 && (
          <input
            className="suggestions"
            type="button"
            value="Click for Suggestions"
            onClick={this.suggest}
          />
        )}

        {this.state.suggestions.length > 0 && (
          <ul className="Pizzas suggestionsBox">
            <li className="PizzaHeaderRow">Suggestions</li>
            {this.state.suggestions.map(suggestion => (
              <li className="PizzaRow">{suggestion}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
