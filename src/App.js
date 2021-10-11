import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import Routes from './Routes';
import Navigation from './Navigation';

const App = () => {
  return (
    <Container fluid={true} className="p-0">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </Container>
  );
}

export default App;
