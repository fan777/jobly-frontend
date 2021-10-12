import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './Form.css';

const LoginForm = () => {
  return (
    <Container className="FormContainer">
      <Row>
        <Col>
          <h4 className="my-4">Log In</h4>
          <Form className="Form">
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" />
            </FormGroup>
            <FormGroup className="my-3">
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm
