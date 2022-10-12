import React, { useState } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {

  const { inputUser, setInputUser } = props;

  const [ valueInput, setValueInput ] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }

  const handleSubmit = () => {
      setInputUser(valueInput);
  }

  const searcherStyles = {
    marginTop: "30px",
    width: "80%",
  };
  const textFieldStyles = {
    width: "90%",
    margin: "0 auto",
  };

  return (
    <Stack sx={searcherStyles} direction="row">
      <TextField
        value = {valueInput}
        onChange = {onSearchValueChange}
        sx={textFieldStyles}
        type="search"
        autoComplete="off"
        label="Github User"
        id="outlined-basic"
        placeholder="Octocat"
        variant="outlined"
	//  🔽🔽🔽
        InputProps={{
            endAdornment: (
              <IconButton onClick={handleSubmit}>
                <SearchIcon 
                />
              </IconButton>
            )
          }}
      />
    </Stack>
  );
};

export default Searcher;