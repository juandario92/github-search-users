import React from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = () => {
  const estilos = {
    marginTop: "30px",
    width: "80%",
  };
  const styleTextField = {
    width: "90%",
    margin: "0 auto",
  };

  return (
    <Stack sx={estilos} direction="row">
      <TextField
        sx={styleTextField}
        type="search"
        autoComplete="off"
        label="Github User"
        id="outlined-basic"
        placeholder="Octocat"
	//  🔽🔽🔽
        InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )
          }}
      />
    </Stack>
  );
};

export default Searcher;