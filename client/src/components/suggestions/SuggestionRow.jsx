import React from "react";
import PropTypes from "prop-types";
import "./SuggestionRow.css";

export default function SuggestionRow({ suggestion }) {
  return (
    <li className="SuggestionRow" key={suggestion}>
      {suggestion}
    </li>
  );
}

SuggestionRow.propTypes = {
  suggestion: PropTypes.object
};
