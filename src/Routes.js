import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './home/Home';
import LoginForm from './users/LoginForm';
import ProfileForm from './users/ProfileForm';
import SignupForm from './users/SignupForm';
import CompanyList from './companies/CompanyList';
import CompanyDetail from './companies/CompanyDetail';
import JobList from './jobs/JobList';
import PrivateRoute from './PrivateRoute';

const Routes = ({ login, signup }) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <LoginForm login={login} />
      </Route>
      <Route exact path='/signup'>
        <SignupForm signup={signup} />
      </Route>
      <PrivateRoute exact path='/companies'>
        <CompanyList />
      </PrivateRoute>
      <PrivateRoute exact path='/companies/:handle' >
        <CompanyDetail />
      </PrivateRoute>
      <PrivateRoute exact path='/jobs'>
        <JobList />
      </PrivateRoute>
      <PrivateRoute path='/profile'>
        <ProfileForm />
      </PrivateRoute>
      <Redirect to='/' />
    </Switch >
  )
}

export default Routes
