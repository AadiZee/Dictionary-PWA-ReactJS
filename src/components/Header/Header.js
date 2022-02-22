import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../data/categories";

const Header = ({ word, setWord, category, setCategory, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      mode: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">Dictionary</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <div className="search-div">
            <TextField
              className="search"
              label="Search Word"
              variant="outlined"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
          </div>

          <div className="select-div">
            <TextField
              className="select"
              select
              disabled
              label="Select Language"
              value={category}
              onChange={(e) => handleChange(e.target.value)}
            >
              {categories.map((categoryOption, index) => {
                return (
                  <MenuItem key={index} value={categoryOption.label}>
                    {categoryOption.value}
                  </MenuItem>
                );
              })}
            </TextField>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
