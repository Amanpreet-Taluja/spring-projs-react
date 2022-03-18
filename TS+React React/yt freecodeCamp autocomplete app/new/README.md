# Regex matching for autocomplete

```
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
```

# Remove styling in UL

```
.AutoCompleteText ul {
  list-style-type: none;
```

# Set a container as empty so that it doesnt show up initially

```
.AutoCompleteText ul::before {
  content: "";
}
```
