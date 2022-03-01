import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";
const Header = ({ category, setCategory, word, setWord, light }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main:light?'#000': "#fff",
      },
      type: light?'light':"dark",
    },
  });

  const handleCatChange = (value) => {
    setCategory(value);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            id="standard-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            className="select"
            label="Language"
            value={category}
            onChange={(e) => handleCatChange(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
