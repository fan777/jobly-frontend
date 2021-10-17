import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './Form.css';

const SignupForm = ({ signup }) => {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  }

  const [alerts, setAlerts] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const { push } = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setAlerts([]);
    let result = await signup(formData);
    if (result.success) {
      push('/companies');
    } else {
      // setFormData();
      setAlerts(result.err)
    }
  }

  return (
    <Container className="FormContainer">
      <Row>
        <Col>
          <h4 className="my-4">Sign up</h4>
          <Form className="Form border p-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" value={formData.passowrd} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="firstName">First name</Label>
              <Input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="lastName">Last name</Label>
              <Input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="emai">Email</Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
            </FormGroup>
            {alerts && alerts.map((alert, index) => <div className="alert alert-danger" key={index}>{alert}</div>)}
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignupForm
