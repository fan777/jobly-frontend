import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './Form.css';

const LoginForm = ({ login }) => {
  const initialState = {
    username: "",
    password: ""
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
    let result = await login(formData);
    if (result.success) {
      push('/companies');
    } else {
      setFormData(initialState);
      setAlerts(result.err)
    }
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
            {alerts && alerts.map((alert, index) => <div className="alert alert-danger" key={index}>{alert}</div>)}
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm
