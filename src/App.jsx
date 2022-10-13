import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { getGithubUser } from './services/users'

const App = () => {

  const [inputUser, setInputUser] = useState('octocat'); // Definimos que el inputUser por defecto va a ser "octocat".
  const [userStater, userState] = useState('inputUser');

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);
    console.log(userResponse);
  }


  useEffect(() => {
    gettingUser(inputUser)
  })
  
  // Definimos los estilos del Contenedor Principal
  const estilosContainer =  {
    background: "whitesmoke",
    width: "80vw",
    height: "500px",
    borderRadius: "16px",
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}
  return(
    <Container 
    // Con la propiedad "sx" formateamos los estilos del Contenedor con la const estilosContainer
    sx={estilosContainer} >
    <Searcher 
    inputUser={inputUser} // Por defecto el inputUser va a ser "octocat" definido más arriba en la destructuracion.
    setInputUser={setInputUser}// Actualiza el estado de inputUser definido más arriba en la destructuracion.
    />
    </Container>
  )
};

export default App;
