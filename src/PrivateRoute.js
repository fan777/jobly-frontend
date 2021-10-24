import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserContext from './users/userContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(UserContext);
  return (
    <Route {...rest} render={() => currentUser
      ? children
      : <Redirect to="/" />
    } />
  )
}


export default PrivateRoute;