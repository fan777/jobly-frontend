import { Container, Row, Col, Button } from 'reactstrap';

import './Home.css'

function Home() {
  return (
    <Container className="Home text-center">
      <Row>
        <Col>
          <h1 className="my-4">Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <Button className="mx-2">Log in</Button><Button className="mx-2">Sign up</Button>
          <h5>Welcome Back</h5>
        </Col>
      </Row>
    </Container >
  )
}

export default Home
