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

  // Definimos los estilos del Stack
  const searcherStyles = {
    marginTop: "30px",
    width: "80%",
  };

  // Definimos los estilos del TextField
  const textFieldStyles = {
    width: "90%",
    margin: "0 auto",
  };



  return (
    <Stack sx={searcherStyles} // Con la propiedad "sx" formateamos los estilos del Stack
    
          direction="row" // Podemos estilizar con propiedades aceptadas en MaterialUi
          > 
      <TextField
        sx={textFieldStyles} // Con la propiedad "sx" formateamos los estilos del TextField
        value = {valueInput} // Por defecto va a estar vacio porque lo definimos más arriba.
        onChange = {onSearchValueChange} // onSearchValueChange es el evento que actualiza el setValueInput, que a su vez actualiza el valueInput, en consecuencia actualiza el value
        type="search"
        autoComplete="off"
        label="Github User"
        id="outlined-basic"
        placeholder="Octocat"
        variant="outlined"
	//  🔽🔽🔽
        InputProps={{
            endAdornment: (
              <IconButton 
              
              onClick={handleSubmit} // Actualiza el setInputUser (el estado que actualiza el inputUser) al valor del valueInput que finalmente actualiza el value.
              >
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