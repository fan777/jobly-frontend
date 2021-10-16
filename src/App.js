import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import UserContext from './users/userContext';
import Routes from './Routes';
import Navigation from './Navigation';

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    setCurrentUser({
      username: "fan777",
      firstName: "charlie",
      lastName: "fan",
      email: "fan777@gmail.com",
      isAdmin: false
    });
  }, [])

  const login = () => {

  }

  const signup = () => {

  }

  const logout = () => {

  }

  return (
    <Container fluid={true} className="p-0">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Navigation />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
