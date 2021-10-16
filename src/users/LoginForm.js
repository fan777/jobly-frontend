import { useState, useEffect } from 'react';
import { Alert, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import JoblyApi from '../api/api';

import './Form.css';

const LoginForm = () => {
  const [user, setUser] = useState();
  const [alerts, setAlerts] = useState("");
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    console.log(user);
    // async function getUser(user) {
    //   let authUser = await JoblyApi.getUser(user)
    //   console.log(authUser);
    // }
    // getUser();
  }, [user])

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setAlerts();
    // const { username, password } = formData;
    let response = await JoblyApi.authUser(formData)
    if (Array.isArray(response)) {
      setAlerts(response)
    } else {
      console.log(response)
    };

    setUser(formData.username)
    setFormData(initialState);
  }

  return (
    <Container className="FormContainer">
      <Row>
        <Col>
          <h4 className="my-4">Log In</h4>
          <Form className="Form border p-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
            </FormGroup>
            {alerts && alerts.map(alert => <Alert color="danger">{alert}</Alert>)}
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

const initialState = {
  username: "",
  password: ""
}

export default LoginForm
