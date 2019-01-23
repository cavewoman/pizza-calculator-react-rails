import React from "react";
import Suggestions from './Suggestions'
import './SuggestionsContainer.css'

class SuggestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    }
    this.getSuggestions = this.getSuggestions.bind(this)
  }

  getSuggestions() {
    console.log("Props", this.props)
    this.setState({suggestions: ['cheese', 'pepperoni']})
  }

  render() {
    return (
      <div className="SuggestionsContainer">
        <div className="SuggestionsContainer_button" onClick={this.getSuggestions}>Click for Suggestions</div>
        {this.state.suggestions.length > 0 && <Suggestions suggestions={this.state.suggestions} />}
      </div>
    );
  }
}

export default SuggestionsContainer;
