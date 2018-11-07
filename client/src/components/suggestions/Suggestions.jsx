import React from 'react'
import SuggestionRow from './SuggestionRow'
import './Suggestions.css'

class Suggestions extends React.Component {
  render() {
    console.log('SUGGESTIONS', this.props)
    const { suggestions } = this.props
    return (
      <div className="Suggestions">
        <li className="Suggestions__header">Suggestions</li>
        {suggestions.map(suggestion => {
          return (<SuggestionRow suggestion={suggestion}/>)
        })}
      </div>
    )
  }
}

export default Suggestions
