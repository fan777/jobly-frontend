import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import UserContext from '../users/userContext';

import './Home.css'

function Home() {
  const { currentUser } = useContext(UserContext);
  const { push } = useHistory();

  return (
    <Container className="Home text-center">
      <Row>
        <Col>
          <h1 className="my-4">Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          {currentUser ? (
            <>
              <h5>Welcome Back, {`${currentUser.username}`}</h5>
            </>
          ) : (
            <>
              <Button onClick={() => push('/login')} className="mx-2">Log in</Button>
              <Button onClick={() => push('/signup')} className="mx-2">Sign up</Button>
            </>
          )}


        </Col>
      </Row>
    </Container >
  )
}

export default Home
