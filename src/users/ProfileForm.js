import { useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import UserContext from './userContext';
import JoblyApi from '../api/api';

import './Form.css';

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [success, setSuccess] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: ""
  });
  // const { push } = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
    setAlerts([]);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let { username, firstName, lastName, password, email } = formData;
      let user = await JoblyApi.updateUser(username, { firstName, lastName, password, email });
      setSuccess(true);
      setCurrentUser(user);
      setFormData(f => ({ ...f, password: "" }));
    } catch (err) {
      setAlerts(err);
      return;
    }
  }

  return (
    <Container className="FormContainer">
      <Row>
        <Col>
          <h4 className="my-4">Profile</h4>
          <Form className="Form border p-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" disabled value={formData.username} onChange={handleChange} />
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
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="password">Confirm password to make changes:</Label>
              <Input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
            </FormGroup>
            {success && (<div className="alert alert-success">Updated successfully!</div>)}
            {alerts && alerts.map((alert, index) => <div className="alert alert-danger" key={index}>{alert}</div>)}
            <Button>Save Changes</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileForm
