import React, { useState } from "react";
import "./AutoCompleteText.css";
const AutoCompleteText = ({ items }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const onTextChanged = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      setSuggestions([]);
    } else {
      const regex = new RegExp(`^${value}`, "i");
      const a = items.sort().filter((item) => item.match(regex));
      setSuggestions(a);
    }
    setText(value);
  };
  const suggestionSelected = (value) => {
    setText(value);
    setSuggestions([]);
  };

  return (
    <div className="AutoCompleteText">
      <input value={text} type="text" onChange={onTextChanged} />
      {suggestions.length !== 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li onClick={() => suggestionSelected(suggestion)}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteText;
