import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import jwt from 'jsonwebtoken';

import { useLocalStorage } from './hooks';
import JoblyApi from './api/api';
import UserContext from './users/userContext';
import Routes from './Routes';
import Navigation from './Navigation';

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [appliedJobs, setAppliedJobs] = useState();
  const [token, setToken] = useLocalStorage("jobly-token");

  useEffect(() => {
    async function getUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let user = await JoblyApi.getUser(username);
          setAppliedJobs(new Set(user.applications));
          setCurrentUser(user);
        } catch (err) {
          setCurrentUser(null);
        }
      }
    }
    getUser();
  }, [token])

  const applyJob = async jobId => {
    try {
      let applied = await JoblyApi.applyJob(currentUser.username, jobId);
      setAppliedJobs(appliedJobs.add(applied));
      return { success: true }
    } catch (err) {
      return { err }
    }
  }

  const login = async data => {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return { success: true }
    } catch (err) {
      return { err };
    }
  }

  const signup = async data => {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true }
    } catch (err) {
      return { err };
    }
  }

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <Container fluid={true} className="p-0">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, applyJob, appliedJobs }}>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
