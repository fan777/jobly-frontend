import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './Form.css';

const ProfileForm = () => {
  return (
    <Container className="FormContainer">
      <Row>
        <Col>
          <h4 className="my-4">Profile</h4>
          <Form className="Form">
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" disabled />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="first_name">First name</Label>
              <Input type="text" name="first_name" id="first_name" />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="last_name">Last name</Label>
              <Input type="text" name="last_name" id="last_name" />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="emai">Email</Label>
              <Input type="email" name="emai" id="emai" />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="password">Confirm password to make changes:</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <Button>Save Changes</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileForm
