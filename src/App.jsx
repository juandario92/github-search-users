import React, { useState } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { useEffect } from "react";
import { getGithubUser } from './services/users'

const App = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userStater, userState] = useState('inputUser');
  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);
    console.log(userResponse);
  }


  useEffect(() => {
    gettingUser(inputUser)
  })
  
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
    <Container sx={estilosContainer} >
    <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  )
};

export default App;
