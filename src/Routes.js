import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import LoginForm from './users/LoginForm';
import SignupForm from './users/SignupForm';
import CompanyList from './companies/CompanyList';
import CompanyDetail from './companies/CompanyDetail';
import JobList from './jobs/JobList';
import ProfileForm from './users/ProfileForm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
      <Route exact path='/signup'>
        <SignupForm />
      </Route>
      <Route exact path='/companies'>
        <CompanyList />
      </Route>
      <Route exact path='/companies/:handle'>
        <CompanyDetail />
      </Route>
      <Route exact path='/jobs'>
        <JobList />
      </Route>
      <Route path='/profile'>
        <ProfileForm />
      </Route>
    </Switch>
  )
}

export default Routes
